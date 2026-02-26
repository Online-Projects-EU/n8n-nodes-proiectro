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

Perform operations on your Proiect.ro data. **14 resources, 99 operations:**

| Resource | Operations |
|---|---|
| **Operational Work Item** | List All, Get, Create, Update, Delete, Move, Approve, Reject, Reassign, My Work Items, My Approvals, List Stage Items, History |
| **Customer** | List All, Get, Create, Update, Delete |
| **Contact** | List, Create, Update, Delete, Invite to Portal |
| **Proposal** | List, Get, Create, Update, Change Stage, Reopen |
| **Project** | List All, Get Work Items |
| **Work Item** | Create, Update, Change Status, Delete |
| **Payment** | Create, Update, Mark Paid, Mark Unpaid, Delete |
| **Support Request** | List All, Get, Create, Edit, Close, Reopen, Change Status, Reassign, Add Comment, My Assigned |
| **Team Member** | List All, Invite, Edit, Remove |
| **Tag** | List All, Create, Update, Delete, Tag/Untag Customer, Member, Resource, Proposal, Work Item, Operational Work Item |
| **Label** | List All, Create, Update, Delete, Label/Unlabel Customer, Member, Resource, Proposal, Work Item, Operational Work Item |
| **Resource** | List All, Create, Update, Delete |
| **Process Definition** | List All, Get, Create, Update, Delete |
| **Webhook** | List All, Create, Update, Delete |

### Proiect.ro Trigger

Starts a workflow when an event occurs in Proiect.ro. Uses real-time webhooks — **65 event types** including:

- Customer, Contact, Proposal, Payment, and Work Item CRUD events
- Operational Work Item lifecycle: created, moved, approved, rejected, reassigned
- Tag and Label attachment/detachment across all entity types
- Process definition and webhook management events
- Support request lifecycle events

Webhook payloads are verified using **HMAC-SHA256 signature verification** with replay protection.

## Links

- [Proiect.ro](https://proiect.ro)
- [API Documentation](https://proiect.ro/api/v1/docs)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE)
