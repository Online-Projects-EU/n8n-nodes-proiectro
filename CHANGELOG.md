# Changelog

## 0.4.0

24 resources, 199 operations, 148 trigger events (was 24 / 196 / 142).

### New operations

- **Proposal**: **Accept Order**, **Reject Order** (with a reason the customer sees) and
  **Mark Order Delivered**, for orders your customers place in the customer portal.

### New trigger events

- **Order Placed**, **Order Accepted**, **Order Rejected**, **Order Cancelled**,
  **Order Receipt Confirmed** and **Quote Requested**, for orders and quote requests from the
  customer portal.

### Changes

- **Customer**: create and update accept **Portal Ordering Enabled** and
  **Portal Quote Requests Enabled**.
- **Proposal**: create and update accept a customer location and asset.
- **Location** and **Customer Location**: latitude, longitude and accuracy fields.
- **Lead**: more sources (cold call, email campaign, existing customer, inbound call and email,
  organic search, paid ads, partner, social media); the default source is now web form.

### Breaking changes

- **Project > Log Work** takes **Duration** (`2`, `1h30m`, `45m` or `3:45`; a bare number is hours)
  instead of **Hours**.

## 0.3.0

24 resources, 196 operations, 142 trigger events (was 18 / 115 / 77).

### New resources

- **Lead** and **Lead List** — capture leads, update status, claim, disqualify, reschedule, convert
  to customer, log activities; create and reassign lists.
- **Document** — generate numbered documents from templates for proposals, customers, operational
  items, support requests, locations and assets; finalize, update, delete, list.
- **Comment** — add, edit, delete and list comments on work items and operational work items.
- **Custom Form** — list forms, submit a form, list and inspect submissions, update a submission's
  status.
- **Timer** — create, update, delete and list timers.
- **KPI** — 22 workspace health indicators (overdue payments, revenue at risk, projects at risk,
  stale proposals, lead pipeline health, queue health, team workload …) for digests and alerts.

### New operations

- Proposal: List Active (with filters), Delete, Log Sales Activity.
- Project: List by Customer, Update, Delete, Archive, Unarchive, Mark Delivered, Cancel, Reopen,
  Log Work.
- Work Item: Get.
- Customer: Enrich Company (Romanian company lookup by CUI).
- Tag / Label: attach and detach on documents and leads.

### Filters and optional fields

- List operations expose a **Filters** collection (search, name, owner, customer, date ranges,
  status flags) — only the filters you add are sent.
- Optional fields on Create / Update moved into an **Additional Fields** collection, so an untouched
  field is no longer sent with a blank or default value.
- Delete operations on resources, work items, locations and customer assets expose
  **Delete Descendants** and **Reparent ID**.

### Triggers

65 new events: the full lead lifecycle, internal / customer / partner support request lifecycles,
project lifecycle, documents, form submissions, comments, work logs, timers, bookings, team
invitations and portal access.

### Removed

Definition-management operations no longer appear in the node — process definitions and asset
categories are list/get only, tags and labels are create/list plus attach/detach, and the Webhook
resource is gone (the Trigger node manages its own subscriptions).

### Package

- Requires Node.js >= 20.15.

## 0.2.0

Locations, customer locations, customer assets, asset categories — 4 new resources and 12 new
trigger events.
