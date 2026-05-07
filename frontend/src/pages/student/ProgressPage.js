import React from 'react';
import PageShell from '../components/PageShell/PageShell';
import { PageHead, Card, Stat, Btn, Bar, Placeholder } from '../components/common/Primitives';
import { I } from '../components/common/Icons';

const SKILLS = [
    ["REST APIs", 80],
    ["Database Design", 65],
    ["Version control", 90],
    ["Team communication", 55],
    ["Testing", 35],
    ["DevOps /Docker", 48],
];

export default function ProgressPage() {
  return (
    <PageShell role="student">
      <PageHead
        crumb="Workspace · Progress"
        title="Your internship progress"
        sub="Tracks how far you've come and what's still ahead."
        actions={<Btn sm kind="ghost">Export report</Btn>}
      />
