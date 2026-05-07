import React from "react";
import PageShell from "../../components/PageShell/PageShell";
import {
  PageHead,
  Card,
  Btn,
  Chip,
  Field,
  Bar,
  Lines,
} from "../../components/common/Primitives";
import { I } from "../components/common/Icons";

const WEEKS = [
  {
    w: 7,
    status: "Draft",
    active: true,
    date: "May 4 — May 8",
    kind: "accent",
  },
  { w: 6, status: "Approved", date: "Apr 27 — May 1", kind: "ok" },
  { w: 5, status: "Approved", date: "Apr 20 — Apr 24", kind: "ok" },
  { w: 4, status: "Returned", date: "Apr 13 — Apr 17", kind: "warn" },
  { w: 3, status: "Approved", date: "Apr 6 — Apr 10", kind: "ok" },
  { w: 2, status: "Approved", date: "Mar 30 — Apr 3", kind: "ok" },
  { w: 1, status: "Approved", date: "Mar 23 — Mar 27", kind: "ok" },
];

function LogbookPage() {
  <PageShell role="student">
    <PageHead
      crumb="Workspace · Logbook"
      title="Weekly logbook"
      sub="Each week, summarize what you did, learned, and need help with. Your supervisor signs off on every entry."
      actions={
        <>
          <Btn sm kind="ghost">
            Export PDF
          </Btn>
          <Btn sm kind="primary">
            {I.plus} New week
          </Btn>
        </>
      }
    />

    <div className="grid grid--side-list">
      <Card padless style={{ overflow: "hidden" }}>
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <span className="tiny">Weeks</span>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 6 }}>
          {WEEKS.map((it) => (
            <li
              key={it.w}
              style={{
                padding: "10px 12px",
                margin: 2,
                borderRadius: 8,
                background: it.active ? "var(--primary-soft)" : "transparent",
                cursor: "pointer",
                border: it.active
                  ? "1px solid rgba(26,54,93,0.2)"
                  : "1px solid transparent",
              }}
            >
              <div className="row row--between row--center">
                <b
                  style={{
                    fontSize: 14,
                    color: it.active
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                  }}
                >
                  Week {it.w}
                </b>
                <Chip kind={it.kind}>{it.status}</Chip>
              </div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                {it.date}
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </PageShell>;
}

export default LogbookPage;
