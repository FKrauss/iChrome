define(["widgets/model"], function(WidgetModel) {
	return WidgetModel.extend({
		defaults: {
			config: {
				title: "i18n.title",
				size: "variable",
				tags: [],
				font: "dark"
			},
			syncData: {
				items: [
					{
						title: "These are sample to-do items"
					}
				]
			}
		},

		initialize: function() {
			if (typeof this.data === "object" && this.data.items) {
				this.saveSyncData(this.data);

				delete this.data;
			}

			WidgetModel.prototype.initialize.call(this);
		}
	});
});