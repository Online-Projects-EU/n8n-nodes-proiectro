import type { INodeProperties } from 'n8n-workflow';

export const timeOffOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['timeOff'] },
		},
		options: [
			{
				name: 'Approve',
				value: 'approve',
				action: 'Approve time off',
				description: 'Approve time off',
			},
			{
				name: 'Ask',
				value: 'create',
				action: 'Ask for time off',
				description: 'Ask for time off as the key\'s owner',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Withdraw time off',
				description: 'Withdraw time off of the key\'s owner',
			},
			{
				name: 'List Requests',
				value: 'list',
				action: 'List time off requests',
				description: 'List time off waiting for a decision and recently decided',
			},
			{
				name: 'Reject',
				value: 'reject',
				action: 'Reject time off',
				description: 'Reject time off, with a reason the member sees',
			},
		],
		default: 'approve',
	},
];

export const timeOffFields: INodeProperties[] = [
	{
		displayName: 'Exception Type',
		name: 'exception_type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Time Off ID',
		name: 'time_off_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["approve", "reject", "delete"],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timeOff'],
				operation: ["reject"],
			},
		},
		options: [
			{
				displayName: 'Decision Note',
				name: 'decision_note',
				type: 'string',
				default: '',
			},
		],
	},
];
