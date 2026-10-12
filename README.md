# n8n-nodes-proiectro

This is an [n8n](https://n8n.io/) community node for [Proiect.ro](https://proiect.ro) — the business management platform for freelancers, founders, and small teams.

Automate your business workflows: manage customers, proposals, payments, work items, support requests, and more — all from n8n.

## Installation

### In n8n Desktop / Self-Hosted

1. Go to **Settings > Community Nodes**
2. Enter `n8n-nodes-proiectro`
3. Click **Install**

### Via npm

```bash
cd ~/.n8n/nodes
npm install n8n-nodes-proiectro
```

## Credentials

You need a Proiect.ro API key to use this node:

1. Log in to your [Proiect.ro](https://proiect.ro) workspace
2. Go to **Settings > API Keys**
3. Create a new API key
4. In n8n, create a new **Proiect.ro API** credential with:
   - **API Key** — the key you just created
   - **Workspace Path** — your workspace identifier (the path segment in your Proiect.ro URL)
   - **Base URL** — `https://proiect.ro` (change only for self-hosted instances)

## Nodes

### Proiect.ro (Action Node)

Perform operations on your Proiect.ro data. **24 resources, 199 operations.** List operations expose a *Filters* collection (search, owner, customer, dates, status …); optional fields sit in *Additional Fields* so only what you set is sent.

| Resource | Operations |
|---|---|
| **Operational Work Item** | List All, Get, Create, Update, Delete, Move, Approve, Reject, Reassign, My Work Items, My Approvals, List Stage Items, History |
| **Customer** | List All, Get, Create, Update, Delete, Enrich Company |
| **Contact** | List, Create, Update, Delete, Invite to Portal |
| **Proposal** | List, Get, Create, Update, Change Stage, Reopen, List Active, Delete, Log Sales Activity, Accept Order, Reject Order, Mark Order Delivered |
| **Project** | List All, Get Work Items, List by Customer, Update, Delete, Archive, Unarchive, Mark Delivered, Cancel, Reopen, Log Work |
| **Work Item** | Create, Update, Change Status, Delete, Get |
| **Payment** | Create, Update, Mark Paid, Mark Unpaid, Delete |
| **Support Request** | List All, Get, Create, Edit, Close, Reopen, Change Status, Reassign, Add Comment, My Assigned |
| **Team Member** | List All, Invite, Edit, Remove |
| **Tag** | List All, Create, Tag/Untag Customer, Member, Resource, Proposal, Work Item, Operational Work Item, Document, Lead |
| **Label** | List All, Create, Label/Unlabel Customer, Member, Resource, Proposal, Work Item, Operational Work Item, Document, Lead |
| **Resource** | List All, Create, Update, Delete |
| **Process Definition** | List All, Get |
| **Location** | List All, Create, Update, Delete |
| **Customer Location** | List, Create, Update, Delete |
| **Customer Asset** | List, Create, Update, Delete |
| **Asset Category** | List All |
| **Comment** | List Work Item Comments, Add to Work Item, Edit Work Item Comment, Delete Work Item Comment, List Operational Item Comments, Add to Operational Item, Edit Operational Item Comment, Delete Operational Item Comment |
| **Lead** | List All, Get, Create, Update, Delete, Update Status, Claim, Disqualify, Reopen, Reschedule, Convert, Mark Do Not Contact, Log Activity, List Activities |
| **Lead List** | List All, Get, Create, Update, Delete, Reassign, Reassign Leads |
| **Document** | List All, Generate for Proposal, Generate for Customer, Generate for Operational Item, Generate for Support Request, Generate for External Support Request, Generate for Location, Generate for Customer Asset, Generate General, Finalize, Update, Delete |
| **Timer** | List All, Create, Update, Delete |
| **Custom Form** | List All, Get, Submit, List Submissions, Get Submission, Update Submission Status |
| **KPI** | 22 indicators: overdue/upcoming payments, revenue at risk, projects at risk, stale/expiring proposals, lead pipeline health, open tickets, queue health, team workload, … |

### Proiect.ro Trigger

Starts a workflow when an event occurs in Proiect.ro. Uses real-time webhooks — **148 event types** including:

- Leads: created, status updated, claimed, disqualified, reopened, converted; lead lists created / reassigned
- Support requests (internal, customer and partner): created, status changed, reassigned, queue transferred, solution accepted / rejected, closed, reopened, comment added
- Operational Work Items: created, moved, approved, rejected, reassigned
- Proposals: created, stage changed, accepted, reopened; sales activity logged; payments created / paid / unpaid
- Customer portal orders: placed, accepted, rejected, cancelled, receipt confirmed; quote requested
- Projects: updated, delivered, cancelled, reopened, archived; work items created / status changed; work logged
- Documents generated / finalized; forms submitted; comments added
- Customers, contacts, locations, assets, resources, bookings, timers, team invitations
- Tag and Label attachment / detachment across all entity types

Webhook payloads are verified using **HMAC-SHA256 signature verification** with replay protection.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Links

- [Proiect.ro](https://proiect.ro)
- [API Documentation](https://proiect.ro/api/v1/docs)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE)
