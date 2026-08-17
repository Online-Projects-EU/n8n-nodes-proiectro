import type { INodeProperties } from 'n8n-workflow';

export const kpiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['kpi'] },
		},
		options: [
			{
				name: 'Blocked Deliverables',
				value: 'blocked_deliverables',
				action: 'Get blocked deliverables',
				description: 'Deliverables blocked by dependencies',
			},
			{
				name: 'Expiring API Keys',
				value: 'expiring_api_keys',
				action: 'Get expiring API keys',
				description: 'API keys about to expire',
			},
			{
				name: 'Expiring Proposals',
				value: 'expiring_proposals',
				action: 'Get expiring proposals',
				description: 'Proposals whose validity is about to lapse',
			},
			{
				name: 'Expiring Warranties',
				value: 'expiring_warranties',
				action: 'Get expiring warranties',
				description: 'Customer assets whose warranty is about to expire',
			},
			{
				name: 'Inactive Partnerships',
				value: 'inactive_partnerships',
				action: 'Get inactive partnerships',
				description: 'Partnerships with no recent activity',
			},
			{
				name: 'Lead Pipeline Health',
				value: 'lead_pipeline_health',
				action: 'Get lead pipeline health',
				description: 'Lead pipeline health indicators',
			},
			{
				name: 'Open External Tickets',
				value: 'open_external_tickets',
				action: 'Get open external tickets',
				description: 'Open customer support requests',
			},
			{
				name: 'Open Tickets',
				value: 'open_tickets',
				action: 'Get open tickets',
				description: 'Open internal support requests',
			},
			{
				name: 'Overdue Operational Items',
				value: 'overdue_operational_items',
				action: 'Get overdue operational items',
				description: 'Operational work items past their due date',
			},
			{
				name: 'Overdue Payments',
				value: 'overdue_payments',
				action: 'Get overdue payments',
				description: 'Payments past their due date',
			},
			{
				name: 'Process Bottlenecks',
				value: 'process_bottlenecks',
				action: 'Get process bottlenecks',
				description: 'Process stages where items pile up',
			},
			{
				name: 'Projects at Risk',
				value: 'projects_at_risk',
				action: 'Get projects at risk',
				description: 'Projects at risk of missing their targets',
			},
			{
				name: 'Proposals Without Activity',
				value: 'proposals_without_activity',
				action: 'Get proposals without activity',
				description: 'Proposals with no recent sales activity',
			},
			{
				name: 'Queue Health',
				value: 'queue_health',
				action: 'Get queue health',
				description: 'Support queue health indicators',
			},
			{
				name: 'Revenue at Risk',
				value: 'revenue_at_risk',
				action: 'Get revenue at risk',
				description: 'Revenue tied to at-risk work',
			},
			{
				name: 'Stale Operational Items',
				value: 'stale_operational_items',
				action: 'Get stale operational items',
				description: 'Operational work items with no recent movement',
			},
			{
				name: 'Stale Proposals',
				value: 'stale_proposals',
				action: 'Get stale proposals',
				description: 'Proposals with no recent stage change',
			},
			{
				name: 'Team Workload',
				value: 'team_workload',
				action: 'Get team workload',
				description: 'Team workload distribution',
			},
			{
				name: 'Unassigned Items',
				value: 'unassigned_items',
				action: 'Get unassigned items',
				description: 'Work with no owner',
			},
			{
				name: 'Upcoming Payments',
				value: 'upcoming_payments',
				action: 'Get upcoming payments',
				description: 'Payments due soon',
			},
			{
				name: 'Won Without Project Start',
				value: 'won_without_project_start',
				action: 'Get won proposals without a project start',
				description: 'Won proposals whose project has not started',
			},
			{
				name: 'Work Items Due',
				value: 'work_items_due',
				action: 'Get work items due',
				description: 'Project work items due soon',
			},
		],
		default: 'blocked_deliverables',
	},
];

export const kpiFields: INodeProperties[] = [
];
