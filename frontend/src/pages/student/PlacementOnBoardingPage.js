import React from 'react';
import { PageHead, Card, Btn, Field } from '../../components/common/Primitives';
import { I } from '../../components/common/Icons';

export default function OnboardingPage() {
  return (
    <div className="page">
      <PageHead
        crumb="Onboarding · Step 1 of 2"
        title="Set up your internship placement"
        sub="You'll unlock your dashboard once your placement is approved."
        actions={<><Btn kind="ghost" sm>Save draft</Btn><Btn kind="primary" sm>{I.arrow} Submit for approval</Btn></>}
      />
