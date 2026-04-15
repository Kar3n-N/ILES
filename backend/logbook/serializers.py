from rest_framework import serializers

from .models import Logbook


class LogbookSerializer(serializers.ModelSerializer):
    """
    Main Serializer for reading logbook data
    """

    # Follow the FK to get the student username
    student_username = serializers.CharField(source="student.username", read_only=True)
    student_fullname = serializers.SerializerMethodField()

    # Status Label
    status_display = serializers.CharField(source="get_status_display", read_only=True)

    # Placement company name
    company_name = serializers.CharField(
        source="placement.company.name", read_only=True
    )

    class Meta:
        model = Logbook
        fields = [
            "id",
            "week_number",
            "start_date",
            "end_date",
            "activities",
            "status",
            "status_display",
            "student",  # FK id
            "student_username",  # computed - used when reading
            "student_fullname",  # computed - used when reading
            "placement",  # FK id
            "company_name",  # computed - used when reading
            "submitted_at",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "created_at",
            "updated_at",
            "submitted_at",
            "student",  # set automatically by the viewset
        ]

        def get_student_fullname(self, obj):
            return f"{obj.student.first_name} {obj.student.last_name}".strip()
