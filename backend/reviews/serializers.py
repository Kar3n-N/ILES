from logbook.models import Logbook
from rest_framework import serializers

from .models import LogReview


class LogReviewSerializer(serializers.ModelSerializer):
    reviewer_username = serializers.CharField(
        source="reviewer.username", read_only=True
    )

    review_fullname = serializers.SerializerMethodField()

    logbook_week = serializers.IntegerField(source="Logbook.week", read_only=True)

    student_username = serializers.CharField(
        source="Logbook.student.username", read_only=True
    )

    action_display = serializers.CharField(source="get_action_display", read_only=True)

    class Meta:
        model = LogReview

        fields = [
            "id",
            "Logbook",
            "logbook_week",
            "student_username",
            "reviewer",
            "reviewer_username",
            "review_fullname",
            "action_display",
            "comment",
            "action",
            "reviewed_at",
        ]

        read_only_fields = ["reviewer", "reviewed_at"]

    def get_reviewer_fullname(self, obj):
        return f"{obj.reviewer.first_name} {obj.reviewer.last_name}".strip()
