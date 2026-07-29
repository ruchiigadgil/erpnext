// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.views.calendar["Task"] = {
	field_map: {
		start: "exp_start_date",
		end: "exp_end_date",
		id: "name",
		title: "subject",
		// No `allDay` mapping: Task has no such field, and mapping it to a missing
		// fieldname makes the calendar fall back to the fieldname string itself,
		// which is truthy and forces every task into the all-day row. Leaving it
		// unset lets FullCalendar infer all-day from the Datetime values.
		progress: "progress",
	},
	gantt: true,
	filters: [
		{
			fieldtype: "Link",
			fieldname: "project",
			options: "Project",
			label: __("Project"),
		},
	],
	get_events_method: "frappe.desk.calendar.get_events",
};
