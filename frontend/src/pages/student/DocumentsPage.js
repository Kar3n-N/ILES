import React from "react";
import {
  PageHead,
  Card,
  Btn,
  Chip,
  Field,
} from "../../components/common/Primitives";
import { I } from "../../components/common/Icons";

const DOCS = [
  { name: "Acceptance letter — Acme Telecoms", type: "Placement · PDF",   date: "20 Mar 2026", sharedWith: "Academic supervisor", status: "Approved"          },
  { name: "CV — Karen Kawooya v3",             type: "Personal · PDF",    date: "18 Mar 2026", sharedWith: "—",                  status: "Approved"          },
  { name: "Midterm report",                    type: "Reports · DOCX",    date: "01 May 2026", sharedWith: "Both supervisors",   status: "Awaiting approval" },
  { name: "Insurance cover",                   type: "Placement · PDF",   date: "—",           sharedWith: "—",                  status: "Required"          },
  { name: "Workplace eval — midterm",          type: "Evaluations · PDF", date: "28 Apr 2026", sharedWith: "Student + Academic", status: "Approved"          },
  { name: "NDA — Acme",                        type: "Placement · PDF",   date: "22 Mar 2026", sharedWith: "Student",            status: "Approved"          },
  { name: "Logbook template (blank)",          type: "Templates · DOCX",  date: "—",           sharedWith: "—",                  status: "Optional"          },
  { name: "Final report template",             type: "Templates · DOCX",  date: "—",           sharedWith: "—",                  status: "Optional"          },
];

function DocRow({ name, type, date, sharedWith, status }) {
  const k = {
    Approved: "ok",
    "Awaiting approval": "warn",
    Required: "danger",
    Optional: "",
  }[status] || "";
  return (
    <tr>
      <td style={{ width: 32 }}>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "var(--primary-soft)",
            color: "var(--color-primary)",
            display: "grid",
            placeItems: "center",
          }}
        >
          {I.fileTxt}
        </span>
      </td>
      <td>
        <b style={{ fontSize: 13 }}>{name}</b>
        <div className="muted" style={{ fontSize: 12 }}>
          {type}
        </div>
      </td>
      <td className="muted">{date}</td>
      <td className="muted">{sharedWith}</td>
      <td>
        <Chip kind={k} dot={!!k}>
          {status}
        </Chip>
      </td>
      <td style={{ textAlign: "right" }}>
        <Btn sm kind="ghost" icon>
          {I.dots}
        </Btn>
      </td>
    </tr>
  );
}

function DocumentsPage() {
  return (
    <div className="page">
      <PageHead
        crumb="Account · Documents"
        title="Documents"
        sub="Everything related to your placement, in one place."
        actions={
          <>
            <Btn sm kind="ghost">New folder</Btn>
            <Btn sm kind="primary">{I.upload} Upload</Btn>
          </>
        }
      />

      <div className="row row--wrap" style={{ gap: 8 }}>
        <Chip kind="accent">All · 12</Chip>
        <Chip>Placement · 3</Chip>
        <Chip>Reports · 2</Chip>
        <Chip>Evaluations · 1</Chip>
        <Chip>Templates · 4</Chip>
        <Chip>Other · 2</Chip>
      </div>
    </div>
  );
}

export default DocumentsPage;
