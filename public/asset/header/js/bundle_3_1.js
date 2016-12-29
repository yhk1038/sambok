/*! no_rails_asset_compression */
webpackJsonp([37], {
	673: function (e, l, t) {
		e.exports = {
			internal: "bright",
			sectionSelections: {
				navbar: {
					sectionId: "navbar",
					category: null,
					displayName: null,
					description: null,
					position: null,
					content: t(1135)
				},
				info: {
					sectionId: "info",
					category: "content",
					displayName: "Info Boxes",
					description: "Show boxes of steps, stats, or tidbits.",
					position: 13,
					content: t(1134)
				},
				cta: {
					sectionId: "cta",
					category: "content",
					displayName: "Button",
					description: "A big call-to-action. Supports an external link or a file download!",
					position: 6,
					content: t(1132)
				},
				title: {
					sectionId: "title",
					category: "content",
					displayName: "Title",
					description: "A big background with a title and tagline.",
					position: 5,
					content: t(1136)
				},
				hero: {
					sectionId: "hero",
					category: "content",
					displayName: "Hero",
					description: "Great for the top of a page. Add images, a button, or even a sign-up form.",
					position: 7,
					content: t(1133)
				},
				ecommerce: {
					sectionId: "ecommerce",
					category: "action",
					displayName: "Simple Store",
					description: "Sell products right on your site! Manage orders, payments, and more.",
					position: 1,
					content: t(818)
				},
				blog: {
					sectionId: "blog",
					category: "action",
					displayName: "Simple Blog",
					description: "Write beautiful blog posts that open in a new page.",
					position: 2,
					content: t(797)
				},
				donation: {
					sectionId: "donation",
					category: "action",
					displayName: "Donation",
					description: "Receive donations right on your site!",
					position: 2,
					content: t(759)
				},
				slider: {
					sectionId: "slider",
					category: "content",
					displayName: "Slider",
					description: "Swipable image slider with text, media, and buttons.",
					position: 17,
					content: t(782)
				},
				signup_form: {
					sectionId: "signup_form",
					category: "content",
					displayName: "Sign-Up Form",
					description: "Let visitors sign up for a newsletter or a service.",
					position: 16,
					content: t(826)
				},
				html: {
					sectionId: "html",
					category: "action",
					displayName: "App Store & HTML",
					description: "Embed a map, a calendar, a document, a form or any HTML code!",
					position: 3,
					content: t(820)
				},
				social_feed: {
					sectionId: "social_feed",
					category: "action",
					displayName: "Social Feed",
					description: "Display your latest social media posts beautifully.",
					position: 4,
					content: t(822)
				},
				icons: {
					sectionId: "icons",
					category: "content",
					displayName: "Contact",
					description: "A list of small icons. Good for social media.",
					position: 12,
					content: t(829)
				},
				footer: {
					sectionId: "footer",
					category: null,
					displayName: null,
					description: null,
					position: null,
					content: t(760)
				},
				gallery: {
					sectionId: "gallery",
					category: "content",
					displayName: "Gallery",
					description: "Image and video thumbnails that open in a full view.",
					position: 11,
					content: t(819)
				},
				text: {
					sectionId: "text",
					category: "content",
					displayName: "Plain Text",
					description: "Just paragraphs of text with titles.",
					position: 14,
					content: t(823)
				},
				block: {
					sectionId: "block",
					category: "action",
					displayName: "Make Your Own Section",
					description: "Want more control over layouts? Arrange components yourself!",
					position: 100,
					content: t(781)
				},
				columns: {
					sectionId: "columns",
					category: "content",
					displayName: "Content in Columns",
					description: "List your projects, clients, features, team, or anything!",
					position: 9,
					content: t(830)
				},
				media: {
					sectionId: "media",
					category: "content",
					displayName: "Big Media",
					description: "Show a big video or image. Or add many of them.",
					position: 10,
					content: t(821)
				},
				contact_form: {
					sectionId: "contact_form",
					category: "content",
					displayName: "Contact Form",
					description: "Let viewers drop their name, email, and message. Show a map and business info.",
					position: 15,
					content: t(824)
				},
				rows: {
					sectionId: "rows",
					category: "content",
					displayName: "Content in Rows",
					description: "List your features, projects, team members, or anything!",
					position: 8,
					content: t(825)
				}
			}
		}
	},
	759: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "donation",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Donation",
					sync_key: null,
					layout_variation: "",
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Donate Now",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				donation1: {
					type: "DonationComponent",
					id: null
				}
			}
		}
	},
	760: function (e) {
		e.exports = {
			type: "Footer",
			id: null,
			template_name: "footer",
			layout_variation: "vertical",
			components: {
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				socialMedia: {
					type: "SocialMediaList",
					id: null,
					list_type: "button",
					link_list: [],
					button_list: [{
						type: "Facebook",
						id: null,
						url: "",
						link_url: "",
						share_text: "",
						app_id: 543870062356274,
						show_button: !0
					}, {
						type: "Twitter",
						id: null,
						url: "",
						link_url: "",
						share_text: "",
						show_button: !0
					}, {
						type: "GPlus",
						id: null,
						url: "",
						link_url: "",
						share_text: "",
						show_button: !0
					}, {
						type: "LinkedIn",
						id: null,
						url: "",
						link_url: "",
						share_text: "",
						show_button: !1
					}]
				},
				copyright: {
					type: "RichText",
					id: null,
					value: "© 2016"
				}
			}
		}
	},
	781: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			defaultValue: null,
			template_id: null,
			template_name: "block",
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Make Your Own",
					sync_key: null,
					layout_variation: null,
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					stockKey: "pastelSolids",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Make Your Own Section!</div>",
					version: 1,
					defaultValue: !1,
					backupValue: !1
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>Add and rearrange any components you want.</div>",
					version: 1,
					defaultValue: !1,
					backupValue: !1
				},
				block1: {
					type: "BlockComponent",
					id: null,
					defaultValue: null,
					items: []
				}
			}
		}
	},
	782: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			defaultValue: null,
			template_id: null,
			template_name: "slider",
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					defaultValue: null,
					show_nav: !0,
					nameChanged: null,
					name: "Slider",
					sync_key: null,
					layout_variation: "",
					display_settings: {}
				},
				slider1: {
					type: "Slider",
					id: null,
					defaultValue: null,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: null,
						components: {
							text1: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Title Text</p>",
								backupValue: null,
								version: 1
							},
							text2: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>",
								backupValue: null,
								version: 1
							},
							background1: {
								type: "Background",
								id: null,
								defaultValue: !1,
								url: "!",
								textColor: "overlay",
								backgroundVariation: "",
								sizing: "cover",
								videoUrl: "",
								videoHtml: "",
								storageKey: "https://images.unsplash.com/uploads/1413259835094dcdeb9d3/6e609595",
								storage: "un",
								format: null,
								h: null,
								w: null,
								s: null
							},
							media1: {
								type: "Media",
								id: null,
								defaultValue: null,
								video: {
									type: "Video",
									id: null,
									defaultValue: null,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null
								},
								image: {
									type: "Image",
									id: null,
									defaultValue: !1,
									link_url: "",
									thumb_url: "https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_1440,w_720,f_auto/v1/194761/Chat_k3d9ls_jnnobh.png",
									url: "https://res.cloudinary.com/hrscywv4p/image/upload/v1/194761/Chat_k3d9ls_jnnobh.png",
									caption: "",
									description: "",
									storageKey: null,
									storage: "c",
									format: "png",
									h: 278,
									w: 256,
									s: 6553,
									new_target: !0
								},
								current: "image"
							},
							button1: {
								type: "Button",
								id: null,
								defaultValue: null,
								text: "Buy Now",
								url: "http://strikingly.com",
								new_target: null
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: null,
						components: {
							text1: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Title Text</p>",
								backupValue: null,
								version: 1
							},
							text2: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>",
								backupValue: null,
								version: 1
							},
							background1: {
								type: "Background",
								id: null,
								defaultValue: !1,
								url: "!",
								textColor: "overlay",
								backgroundVariation: "",
								sizing: "cover",
								videoUrl: "",
								videoHtml: "",
								storageKey: "https://images.unsplash.com/photo-1415025148099-17fe74102b28",
								storage: "un",
								format: null,
								h: null,
								w: null,
								s: null
							},
							media1: {
								type: "Media",
								id: null,
								defaultValue: null,
								video: {
									type: "Video",
									id: null,
									defaultValue: !0,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null
								},
								image: {
									type: "Image",
									id: null,
									defaultValue: !0,
									link_url: "",
									thumb_url: "",
									url: "/assets/themes/onyx_new/stri.png",
									caption: "",
									description: "",
									storageKey: null,
									storage: null,
									format: null,
									h: null,
									w: null,
									s: null,
									new_target: null
								},
								current: "image"
							},
							button1: {
								type: "Button",
								id: null,
								defaultValue: !0,
								text: "Buy Now",
								url: "http://strikingly.com",
								new_target: null
							}
						}
					}],
					components: {
						text1: {
							type: "RichText",
							id: null,
							defaultValue: !0,
							value: "Title Text",
							backupValue: null,
							version: null
						},
						text2: {
							type: "RichText",
							id: null,
							defaultValue: !0,
							value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
							backupValue: null,
							version: null
						},
						background1: {
							type: "Background",
							id: null,
							defaultValue: !0,
							url: "https://images.unsplash.com/photo-1415025148099-17fe74102b28",
							textColor: "light",
							backgroundVariation: "",
							sizing: "cover",
							videoUrl: "",
							videoHtml: "",
							storageKey: null,
							storage: null,
							format: null,
							h: null,
							w: null,
							s: null
						},
						media1: {
							type: "Media",
							id: null,
							defaultValue: null,
							video: {
								type: "Video",
								id: null,
								defaultValue: !0,
								html: "",
								url: "http://vimeo.com/18150336",
								thumbnail_url: null,
								maxwidth: 700,
								description: null
							},
							image: {
								type: "Image",
								id: null,
								defaultValue: !0,
								link_url: "",
								thumb_url: "",
								url: "/assets/themes/onyx_new/stri.png",
								caption: "",
								description: "",
								storageKey: null,
								storage: null,
								format: null,
								h: null,
								w: null,
								s: null,
								new_target: null
							},
							current: "image"
						},
						button1: {
							type: "Button",
							id: null,
							defaultValue: !0,
							text: "Buy Now",
							url: "http://strikingly.com",
							new_target: null
						}
					},
					infinite_slider: !1,
					auto_slide: !1,
					transition: "horizontal",
					auto_play: 31536e3
				}
			}
		}
	},
	797: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			defaultValue: null,
			template_id: null,
			template_name: "blog",
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Blog",
					sync_key: null,
					layout_variation: null,
					defaultValue: null
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>The Blog</div>",
					version: 1,
					defaultValue: !1,
					backupValue: !1
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>Thoughts, musings, and ruminations.</div>",
					version: 1,
					defaultValue: !1,
					backupValue: !1
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				blog1: {
					type: "BlogCollectionComponent",
					id: 40,
					app_instance_id: null,
					app_id: null,
					defaultValue: null
				}
			}
		}
	},
	818: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "ecommerce",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Store",
					sync_key: null,
					layout_variation: "row",
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Shop Now",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "Check out our products.",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				ecommerce1: {
					type: "EcommerceComponent",
					category: "all",
					id: null,
					text: null,
					defaultValue: !0
				}
			}
		}
	},
	819: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			defaultValue: !0,
			template_id: null,
			template_name: "gallery",
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					defaultValue: "",
					show_nav: !0,
					nameChanged: null,
					name: "Gallery",
					sync_key: null,
					layout_variation: "normal",
					display_settings: {}
				},
				text1: {
					type: "RichText",
					id: null,
					defaultValue: !1,
					value: "<p>Gallery</p>",
					backupValue: null,
					version: 1
				},
				text2: {
					type: "RichText",
					id: null,
					defaultValue: !1,
					value: "<p>Photos &amp; videos from our travels.</p>",
					backupValue: null,
					version: 1
				},
				background1: {
					type: "Background",
					id: null,
					defaultValue: !0,
					url: "",
					textColor: "light",
					backgroundVariation: "",
					sizing: "cover",
					videoUrl: "",
					videoHtml: "",
					storageKey: null,
					storage: null,
					format: null,
					h: null,
					w: null,
					s: null
				},
				gallery1: {
					type: "Gallery",
					id: null,
					defaultValue: !0,
					image_type: null,
					sources: [{
						type: "Image",
						id: null,
						defaultValue: null,
						link_url: "",
						thumb_url: "!",
						url: "!",
						caption: "",
						description: "",
						storageKey: "194761/Screen_Shot_2016-08-31_at_3.04.50_PM_rosex2",
						storage: "c",
						format: "png",
						h: 562,
						w: 1066,
						s: 1233846,
						new_target: !1
					}, {
						type: "Image",
						id: null,
						defaultValue: null,
						link_url: "",
						thumb_url: "!",
						url: "!",
						caption: "",
						description: "",
						storageKey: "194761/Screen_Shot_2016-08-31_at_3.04.58_PM_vsvqcm",
						storage: "c",
						format: "png",
						h: 563,
						w: 1061,
						s: 435008,
						new_target: !1
					}, {
						type: "Image",
						id: null,
						defaultValue: null,
						link_url: "",
						thumb_url: "!",
						url: "!",
						caption: "",
						description: "",
						storageKey: "194761/Screen_Shot_2016-08-31_at_3.04.41_PM_vmaxvb",
						storage: "c",
						format: "png",
						h: 561,
						w: 1067,
						s: 1053954,
						new_target: !1
					}]
				}
			},
			thumbnail_data: {
				template_name: "gallery",
				components: {
					slideSettings: {
						layout_variation: "normal"
					},
					text1: {
						value: "<p>Gallery</p>"
					},
					text2: {
						value: "<p>Photos &amp; videos from our travels.</p>"
					},
					background1: {
						url: ""
					},
					gallery1: {
						sources: [{
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/194761/Screen_Shot_2016-08-31_at_3.04.50_PM_rosex2.png"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/194761/Screen_Shot_2016-08-31_at_3.04.58_PM_vsvqcm.png"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/194761/Screen_Shot_2016-08-31_at_3.04.41_PM_vmaxvb.png"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/222722/121_mojrsm.jpg"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/222722/170_mm931a.jpg"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/222722/188_vyqzef.jpg"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/222722/175_zkp0es.jpg"
						}, {
							url: "//res.cloudinary.com/hrscywv4p/image/upload/c_fill,h_200,w_200,f_auto,g_faces:center,q_90/v1/222722/171_rdf8l4.jpg"
						}]
					}
				}
			}
		}
	},
	820: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "html",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "App Store",
					sync_key: null,
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Embed an App</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>Or write your own HTML code! (HTML is Pro only)</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/8.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				html1: {
					type: "HtmlComponent",
					id: null,
					value: "",
					render_as_iframe: null,
					selected_app_name: null,
					app_list: "{}",
					defaultValue: !0
				}
			}
		}
	},
	821: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			defaultValue: !0,
			template_id: null,
			template_name: "media",
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					defaultValue: !0,
					show_nav: !0,
					nameChanged: null,
					name: "Big Media",
					sync_key: null,
					layout_variation: "normal",
					display_settings: {}
				},
				background1: {
					type: "Background",
					id: null,
					defaultValue: !0,
					url: "",
					textColor: "light",
					backgroundVariation: "",
					sizing: "cover",
					videoUrl: "",
					videoHtml: "",
					storageKey: null,
					storage: null,
					format: null,
					h: null,
					w: null,
					s: null
				},
				text1: {
					type: "RichText",
					id: null,
					defaultValue: !1,
					value: "<p>Photos &amp; Videos</p>",
					backupValue: null,
					version: 1
				},
				text2: {
					type: "RichText",
					id: null,
					defaultValue: !1,
					value: "<p>Take a look and enjoy!</p>",
					backupValue: null,
					version: 1
				},
				repeatable1: {
					type: "Repeatable",
					id: null,
					defaultValue: !0,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								defaultValue: !0,
								video: {
									type: "Video",
									id: null,
									defaultValue: !0,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null
								},
								image: {
									type: "Image",
									id: null,
									defaultValue: !0,
									link_url: null,
									thumb_url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									caption: "",
									description: "",
									storageKey: null,
									storage: null,
									format: null,
									h: null,
									w: null,
									s: null,
									new_target: !0
								},
								current: "image"
							},
							text1: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Title Text</p>",
								backupValue: null,
								version: 1
							},
							text2: {
								type: "RichText",
								id: null,
								defaultValue: !0,
								value: "",
								backupValue: null,
								version: null
							},
							text3: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>A sentence or two describing this item.</p>",
								backupValue: null,
								version: 1
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								defaultValue: !1,
								video: {
									type: "Video",
									id: null,
									defaultValue: !1,
									html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F18150336&wmode=transparent&src_secure=1&url=http%3A%2F%2Fvimeo.com%2F18150336&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F117311910_1280.jpg&key=25afbca9c69b4d728fa90e96b92e6b33&type=text%2Fhtml&schema=vimeo" width="700" height="394" scrolling="no" frameborder="0" allowfullscreen></iframe>',
									url: "http://vimeo.com/18150336",
									thumbnail_url: "http://i.vimeocdn.com/video/117311910_1280.jpg",
									maxwidth: 700,
									description: null
								},
								image: {
									type: "Image",
									id: null,
									defaultValue: !0,
									link_url: null,
									thumb_url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									caption: "",
									description: "",
									storageKey: null,
									storage: null,
									format: null,
									h: null,
									w: null,
									s: null,
									new_target: !0
								},
								current: "video"
							},
							text1: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>Title Text</p>",
								backupValue: null,
								version: 1
							},
							text2: {
								type: "RichText",
								id: null,
								defaultValue: !0,
								value: "",
								backupValue: null,
								version: null
							},
							text3: {
								type: "RichText",
								id: null,
								defaultValue: !1,
								value: "<p>A sentence or two describing this item.</p>",
								backupValue: null,
								version: 1
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}],
					components: {
						media1: {
							type: "Media",
							id: null,
							defaultValue: !0,
							video: {
								type: "Video",
								id: null,
								defaultValue: !0,
								html: "",
								url: "http://vimeo.com/18150336",
								thumbnail_url: null,
								maxwidth: 700,
								description: null
							},
							image: {
								type: "Image",
								id: null,
								defaultValue: !0,
								link_url: null,
								thumb_url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
								url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
								caption: "",
								description: "",
								storageKey: null,
								storage: null,
								format: null,
								h: null,
								w: null,
								s: null,
								new_target: !0
							},
							current: "image"
						},
						text1: {
							type: "RichText",
							id: null,
							defaultValue: !0,
							value: "Some caption here",
							backupValue: null,
							version: null
						},
						text2: {
							type: "RichText",
							id: null,
							defaultValue: !0,
							value: "",
							backupValue: null,
							version: null
						},
						text3: {
							type: "RichText",
							id: null,
							defaultValue: !0,
							value: "A sentence or two describing this item.",
							backupValue: null,
							version: null
						},
						button1: {
							type: "Button",
							id: null,
							text: "",
							url: "",
							new_target: null,
							defaultValue: !0
						}
					}
				}
			}
		}
	},
	822: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "social_feed",
			defaultValue: null,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Social Feed",
					sync_key: null,
					layout_variation: null,
					defaultValue: null
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Social Feed</div>",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>Check out my latest updates!</div>",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				social_feed1: {
					type: "SocialFeedComponent",
					id: null,
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				}
			}
		}
	},
	823: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "text",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Plain Text",
					sync_key: null,
					layout_variation: "normal",
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "About Our Company",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "We always strive for the best.",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				repeatable1: {
					type: "Repeatable",
					defaultValue: !0,
					id: null,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							text1: {
								type: "RichText",
								id: null,
								value: "Passion",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "Use a text section to describe your values, show more info, summarize a topic, or tell a story. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							text1: {
								type: "RichText",
								id: null,
								value: "Independence",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "Use a text section to describe your values, show more info, summarize a topic, or tell a story. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}],
					components: {
						text1: {
							type: "RichText",
							id: null,
							value: "Title Text",
							version: null,
							defaultValue: !0,
							backupValue: null
						},
						text2: {
							type: "RichText",
							id: null,
							value: "Use a text section to describe your values, or show more info, or summarize a topic, or tell a story. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
							version: null,
							defaultValue: !0,
							backupValue: null
						},
						button1: {
							type: "Button",
							id: null,
							text: "",
							url: "",
							new_target: null,
							defaultValue: !0
						}
					}
				}
			}
		}
	},
	824: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "contact_form",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Contact Us",
					sync_key: null,
					defaultValue: !0,
					layout_variation: null,
					display_settings: {
						hide_form: !1,
						show_map: !1,
						show_info: !1
					}
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Contact Us</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>Don't be afraid to reach out. You + us = awesome.</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				email1: {
					type: "EmailForm",
					label: "",
					id: null,
					hideMessageBox: !1,
					hide_name: !1,
					hide_email: !1,
					name_label: "Name",
					email_label: "Email",
					phone_number_label: "Phone",
					message_label: "Message",
					submit_label: "Submit",
					thanksMessage: "Thanks for your submission!",
					recipient: "",
					defaultValue: !0
				},
				contactInfo1: {
					type: "ContactInfo",
					address: null,
					phone: null,
					hours: null,
					email: null
				}
			}
		}
	},
	825: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "rows",
			defaultValue: null,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Feature Listing",
					sync_key: null,
					layout_variation: "mediaRight",
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "What We Do",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "Show off your projects, features, or clients in this section.",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				repeatable1: {
					type: "Repeatable",
					id: null,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								defaultValue: !0,
								video: {
									type: "Video",
									id: null,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null,
									defaultValue: !0
								},
								image: {
									type: "Image",
									id: null,
									link_url: null,
									thumb_url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									caption: "",
									description: "",
									new_target: !0,
									defaultValue: !0
								},
								current: "image"
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Title Text",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "A small tagline",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text3: {
								type: "RichText",
								id: null,
								value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								defaultValue: !0,
								video: {
									type: "Video",
									id: null,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null,
									defaultValue: !0
								},
								image: {
									type: "Image",
									id: null,
									link_url: null,
									thumb_url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
									caption: "",
									description: "",
									new_target: !0,
									defaultValue: !0
								},
								current: "image"
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Title Text",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "A small tagline",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							text3: {
								type: "RichText",
								id: null,
								value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
								version: null,
								defaultValue: !0,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}],
					defaultValue: !0,
					components: {
						media1: {
							type: "Media",
							defaultValue: !0,
							id: null,
							video: {
								type: "Video",
								id: null,
								html: "",
								url: "http://vimeo.com/18150336",
								thumbnail_url: null,
								maxwidth: 700,
								description: null,
								defaultValue: !0
							},
							image: {
								type: "Image",
								id: null,
								link_url: null,
								thumb_url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
								url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
								caption: "",
								description: "",
								new_target: !0,
								defaultValue: !0
							},
							current: "image"
						},
						text1: {
							type: "RichText",
							id: null,
							value: "Title Text",
							version: null,
							defaultValue: !0,
							backupValue: null
						},
						text2: {
							type: "RichText",
							id: null,
							value: "A small tagline",
							version: null,
							defaultValue: !0,
							backupValue: null
						},
						text3: {
							type: "RichText",
							id: null,
							value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
							version: null,
							defaultValue: !0,
							backupValue: null
						},
						button1: {
							type: "Button",
							id: null,
							text: "",
							url: "",
							new_target: null,
							defaultValue: !0
						}
					}
				}
			}
		}
	},
	826: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "signup_form",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Sign Up",
					sync_key: null,
					defaultValue: !0,
					layout_variation: null
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Sign Up</div>",
					defaultValue: !0,
					version: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>We'll get in touch with you soon.</div>",
					defaultValue: !0,
					version: null,
					backupValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "https://images.unsplash.com/photo-1421757295538-9c80958e75b0?h=1500&w=2000&q=90&fit=clip&fm=jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				email1: {
					type: "EmailForm",
					label: "",
					id: null,
					hideMessageBox: !1,
					hide_name: !1,
					hide_email: !1,
					hide_phone_number: !0,
					name_label: "Name",
					email_label: "Email",
					phone_number_label: "Phone",
					message_label: "Message",
					submit_label: "Submit",
					thanksMessage: "Thanks for your submission!",
					recipient: "",
					defaultValue: !0
				},
				media1: {
					type: "Media",
					id: null,
					video: {
						type: "Video",
						id: null,
						html: "",
						url: "http://vimeo.com/18150336",
						thumbnail_url: null,
						maxwidth: 700,
						description: null,
						defaultValue: null
					},
					image: {
						type: "Image",
						id: null,
						link_url: null,
						thumb_url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
						url: "//uploads.strikinglycdn.com/static/sections/iphone6-1.png",
						caption: "",
						description: "",
						new_target: !0,
						defaultValue: !0
					},
					current: "image",
					defaultValue: null
				},
				image1: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "//assets.strikingly.com/static/icons/app-badges/apple-ios.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: null
				},
				image2: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "//assets.strikingly.com/static/icons/app-badges/android2.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: null
				},
				button1: {
					type: "Button",
					id: null,
					text: "DOWNLOAD",
					url: "https://www.strikingly.com/",
					new_target: null,
					defaultValue: null
				}
			}
		}
	},
	829: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "icons",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Contact Us",
					sync_key: null,
					layout_variation: "5col",
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Connect With Us",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "Make sure to add links to the icons!",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				repeatable1: {
					type: "Repeatable",
					id: null,
					defaultValue: !0,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							image1: {
								caption: "",
								thumb_url: null,
								link_url: null,
								url: "//uploads.strikinglycdn.com/page/images/icons/email-icon.png",
								new_target: !0,
								type: "Image",
								id: null,
								description: "",
								defaultValue: !0
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Email",
								version: null,
								defaultValue: !0,
								backupValue: null
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							image1: {
								caption: "",
								thumb_url: null,
								link_url: null,
								url: "//uploads.strikinglycdn.com/page/images/icons/phone-icon.png",
								new_target: !0,
								type: "Image",
								id: null,
								description: "",
								defaultValue: !0
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Phone",
								version: null,
								defaultValue: !0,
								backupValue: null
							}
						}
					}],
					components: {
						image1: {
							caption: "",
							thumb_url: null,
							link_url: null,
							url: "//uploads.strikinglycdn.com/page/images/icons/email-icon.png",
							new_target: !0,
							type: "Image",
							id: null,
							description: "",
							defaultValue: !0
						},
						text1: {
							type: "RichText",
							id: null,
							value: "Add text here",
							version: null,
							defaultValue: !0,
							backupValue: null
						}
					}
				}
			},
			thumbnail_data: {
				template_name: "icons",
				components: {
					slideSettings: {
						layout_variation: "5col"
					},
					background1: {
						url: "!",
						textColor: "overlay",
						sizing: "cover",
						storageKey: "https://images.unsplash.com/photo-1452690700222-8a2a1a109f4c",
						storage: "un",
						format: null,
						h: null,
						w: null,
						s: null
					},
					text1: {
						value: "<p>Stay in Touch</p>"
					},
					text2: {
						value: "<p>Just say hi or send inquiries</p>"
					},
					repeatable1: {
						list: [{
							components: {
								image1: {
									url: "//uploads.strikinglycdn.com/page/images/icons/email-icon.png"
								},
								text1: {
									value: "<p>Email</p>"
								}
							}
						}, {
							components: {
								image1: {
									url: "//uploads.strikinglycdn.com/page/images/icons/twitter-icon.png"
								},
								text1: {
									value: "<p>Twitter</p>"
								}
							}
						}, {
							components: {
								image1: {
									url: "//uploads.strikinglycdn.com/page/images/icons/linkedin-icon.png"
								},
								text1: {
									value: "<p>LinkedIn</p>"
								}
							}
						}, {
							components: {
								image1: {
									url: "http://uploads.strikinglycdn.com/static/icons/black/instagram-icon.png"
								},
								text1: {
									value: "<p>Instagram</p>"
								}
							}
						}]
					}
				}
			}
		}
	},
	830: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "columns",
			defaultValue: null,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Columns",
					sync_key: null,
					layout_variation: "2col",
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Profiles",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "We've got a top notch team!",
					defaultValue: !0,
					version: null,
					backupValue: null
				},
				repeatable1: {
					type: "Repeatable",
					defaultValue: null,
					id: null,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								video: {
									type: "Video",
									id: null,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									description: null,
									defaultValue: !0
								},
								image: {
									type: "Image",
									id: null,
									link_url: null,
									thumb_url: "//assets.strikingly.com/static/icons/delicate/57.png",
									url: "//assets.strikingly.com/static/icons/delicate/57.png",
									caption: "",
									description: "",
									new_target: !0,
									defaultValue: !0
								},
								defaultValue: !0,
								current: "image"
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Title Text",
								version: null,
								defaultValue: null,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "A small tagline",
								version: null,
								defaultValue: null,
								backupValue: null
							},
							text3: {
								type: "RichText",
								id: null,
								value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
								version: null,
								defaultValue: null,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							media1: {
								type: "Media",
								id: null,
								video: {
									type: "Video",
									id: null,
									html: "",
									url: "http://vimeo.com/18150336",
									thumbnail_url: null,
									maxwidth: 700,
									defaultValue: !0,
									description: null
								},
								image: {
									type: "Image",
									id: null,
									link_url: null,
									thumb_url: "//assets.strikingly.com/static/icons/delicate/35.png",
									url: "//assets.strikingly.com/static/icons/delicate/35.png",
									caption: "",
									description: "",
									new_target: !0,
									defaultValue: !0
								},
								current: "image",
								defaultValue: !0
							},
							text1: {
								type: "RichText",
								id: null,
								value: "Title Text",
								defaultValue: !0,
								version: null,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "A small tagline",
								defaultValue: !0,
								version: null,
								backupValue: null
							},
							text3: {
								type: "RichText",
								id: null,
								value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
								defaultValue: !0,
								version: null,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}],
					components: {
						media1: {
							type: "Media",
							id: null,
							video: {
								type: "Video",
								id: null,
								html: "",
								url: "http://vimeo.com/18150336",
								thumbnail_url: null,
								maxwidth: 700,
								description: null,
								defaultValue: null
							},
							image: {
								type: "Image",
								id: null,
								link_url: null,
								thumb_url: "//assets.strikingly.com/static/icons/delicate/14.png",
								url: "//assets.strikingly.com/static/icons/delicate/14.png",
								caption: "",
								description: "",
								new_target: !0,
								defaultValue: !0
							},
							current: "image",
							defaultValue: !0
						},
						text1: {
							type: "RichText",
							id: null,
							value: "Title Text",
							defaultValue: !0,
							version: null,
							backupValue: null
						},
						text2: {
							type: "RichText",
							id: null,
							value: "A small tagline",
							defaultValue: !0,
							version: null,
							backupValue: null
						},
						text3: {
							type: "RichText",
							id: null,
							value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
							defaultValue: !0,
							version: null,
							backupValue: null
						},
						button1: {
							type: "Button",
							id: null,
							text: "",
							url: "",
							new_target: null,
							defaultValue: !0
						}
					}
				}
			},
			thumbnail_data: {
				template_name: "columns",
				components: {
					slideSettings: {
						layout_variation: "2col"
					},
					background1: {
						url: "http://uploads.strikinglycdn.com/static/backgrounds/striking-pack-2/28.jpg"
					},
					text1: {
						value: "Profiles"
					},
					text2: {
						value: "We've got a top notch team!"
					},
					repeatable1: {
						list: [{
							components: {
								media1: {
									image: {
										url: "//assets.strikingly.com/static/icons/delicate/57.png"
									}
								},
								text1: {
									value: "Title Text"
								},
								text2: {
									value: "A small tagline"
								},
								text3: {
									value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
								}
							}
						}, {
							components: {
								media1: {
									image: {
										url: "//assets.strikingly.com/static/icons/delicate/35.png"
									}
								},
								text1: {
									value: "Title Text"
								},
								text2: {
									value: "A small tagline"
								},
								text3: {
									value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
								}
							}
						}, {
							components: {
								media1: {
									image: {
										url: "//assets.strikingly.com/static/icons/delicate/18.png"
									}
								},
								text1: {
									value: "Title Text"
								},
								text2: {
									value: "A small tagline"
								},
								text3: {
									value: "A sentence or two describing this item. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
								}
							}
						}]
					}
				}
			}
		}
	},
	1132: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "cta",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Button",
					sync_key: null,
					layout_variation: "center",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<div>Download Now</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<div>You can add any link or even upload a file to this button!</div>",
					version: null,
					defaultValue: !0,
					backupValue: null
				},
				text3: {
					type: "RichText",
					id: null,
					value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				button1: {
					type: "Button",
					id: null,
					text: "DOWNLOAD",
					url: "",
					new_target: null,
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "//uploads.strikinglycdn.com/static/backgrounds/theme-content/spacewalk.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				media1: {
					type: "Media",
					id: null,
					defaultValue: !0,
					video: {
						type: "Video",
						id: null,
						html: "",
						url: "http://vimeo.com/18150336",
						thumbnail_url: null,
						maxwidth: 700,
						description: null,
						defaultValue: !0
					},
					image: {
						type: "Image",
						id: null,
						link_url: null,
						thumb_url: null,
						url: null,
						caption: "",
						description: "",
						new_target: !0,
						defaultValue: !0
					},
					current: "image"
				}
			}
		}
	},
	1133: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "hero",
			defaultValue: null,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Hero",
					sync_key: null,
					layout_variation: "buttonLeft",
					defaultValue: null
				},
				text1: {
					type: "RichText",
					id: null,
					value: "<p style='text-align: center;'>A Heroic Section</p>",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<p style='text-align: center;'>Introduce your product or service!</p>",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				button1: {
					type: "Button",
					id: null,
					text: "DOWNLOAD",
					url: "https://www.strikingly.com/",
					new_target: null,
					defaultValue: null
				},
				background1: {
					type: "Background",
					id: null,
					url: "",
					sizing: "cover",
					textColor: "overlay",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				},
				media1: {
					type: "Media",
					id: null,
					video: {
						type: "Video",
						id: null,
						html: "",
						url: "http://vimeo.com/18150336",
						thumbnail_url: null,
						maxwidth: 700,
						description: null,
						defaultValue: null
					},
					image: {
						type: "Image",
						id: null,
						link_url: null,
						thumb_url: "//uploads.strikinglycdn.com/static/backgrounds/striking-pack-3/7.jpg",
						url: "//uploads.strikinglycdn.com/static/sections/iphone6-1.png",
						caption: "",
						description: "",
						new_target: !0,
						defaultValue: !0
					},
					current: "image",
					defaultValue: null
				},
				email1: {
					type: "EmailForm",
					label: "",
					id: null,
					hideMessageBox: !1,
					hide_name: !1,
					hide_email: !1,
					hide_phone_number: !0,
					name_label: "Name",
					email_label: "Email",
					phone_number_label: "Phone",
					message_label: "Message",
					submit_label: "Submit",
					thanksMessage: "Thanks for your submission!",
					recipient: "",
					defaultValue: null
				},
				image1: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "//assets.strikingly.com/static/icons/app-badges/apple-ios.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: null
				},
				image2: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "//assets.strikingly.com/static/icons/app-badges/android2.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: null
				}
			}
		}
	},
	1134: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "info",
			defaultValue: !0,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Info",
					sync_key: null,
					layout_variation: "2col",
					defaultValue: !0
				},
				background1: {
					textColor: "light",
					backgroundVariation: "",
					videoHtml: "",
					url: "",
					sizing: "cover",
					videoUrl: "",
					type: "Background",
					id: null,
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Stats & Figures",
					defaultValue: !0,
					version: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "We let the results speak for themselves.",
					defaultValue: !0,
					version: null,
					backupValue: null
				},
				repeatable1: {
					type: "Repeatable",
					id: null,
					defaultValue: !0,
					list: [{
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							text1: {
								type: "RichText",
								id: null,
								value: "20M",
								defaultValue: !0,
								version: null,
								backupValue: null
							},
							text2: {
								type: "RichText",
								id: null,
								value: "People reached",
								defaultValue: !0,
								version: null,
								backupValue: null
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}, {
						type: "RepeatableItem",
						id: null,
						defaultValue: !0,
						components: {
							text1: {
								type: "RichText",
								id: null,
								value: "$1.5M",
								version: null,
								backupValue: null,
								defaultValue: !0
							},
							text2: {
								type: "RichText",
								id: null,
								value: "Funding raised",
								version: null,
								backupValue: null,
								defaultValue: !0
							},
							button1: {
								type: "Button",
								id: null,
								text: "",
								url: "",
								new_target: null,
								defaultValue: !0
							}
						}
					}],
					components: {
						text1: {
							type: "RichText",
							id: null,
							value: "500",
							version: null,
							backupValue: null,
							defaultValue: !0
						},
						text2: {
							type: "RichText",
							id: null,
							value: "Clients served",
							version: null,
							backupValue: null,
							defaultValue: !0
						},
						button1: {
							type: "Button",
							id: null,
							text: "",
							url: "",
							new_target: null,
							defaultValue: !0
						}
					}
				}
			}
		}
	},
	1135: function (e) {
		e.exports = {
			type: "Menu",
			id: null,
			logo: null,
			template_name: "navbar",
			components: {
				image1: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_540,w_720/acax3ilq2tovi0m8k2gw.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: !0
				},
				image2: {
					caption: "",
					thumb_url: null,
					link_url: null,
					url: "http://assets.strikingly.com/assets/themes/fresh/power.png",
					new_target: !0,
					type: "Image",
					id: null,
					description: "",
					defaultValue: !0
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Title Text"
				},
				text2: {
					type: "RichText",
					id: null,
					value: "Subtitle Text",
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "/assets/themes/profile/bg.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: null,
					videoHtml: null,
					defaultValue: !0
				},
				background2: {
					type: "Background",
					id: null,
					url: "//uploads.striking.ly/page/images/backgrounds/banners/banner1.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: null,
					videoHtml: null,
					defaultValue: !0
				},
				button1: {
					type: "Button",
					id: null,
					text: "Add a button",
					url: "http://strikingly.com",
					new_target: null
				}
			}
		}
	},
	1136: function (e) {
		e.exports = {
			type: "Slide",
			id: null,
			template_id: null,
			template_name: "title",
			defaultValue: null,
			components: {
				slideSettings: {
					type: "SlideSettings",
					id: null,
					show_nav: !0,
					name: "Title",
					sync_key: null,
					layout_variation: "normal",
					defaultValue: null
				},
				text1: {
					type: "RichText",
					id: null,
					value: "Hello & Welcome!",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				text2: {
					type: "RichText",
					id: null,
					value: "<em>Add a subtitle here.</em>",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				text3: {
					type: "RichText",
					id: null,
					value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
					version: null,
					defaultValue: null,
					backupValue: null
				},
				media1: {
					type: "Media",
					id: null,
					video: {
						type: "Video",
						id: null,
						html: "",
						url: "http://vimeo.com/18150336",
						thumbnail_url: null,
						maxwidth: 700,
						description: null,
						defaultValue: null
					},
					image: {
						caption: "",
						thumb_url: "",
						link_url: null,
						url: "",
						new_target: !0,
						type: "Image",
						id: null,
						description: "",
						defaultValue: !0
					},
					defaultValue: null,
					current: "image"
				},
				button1: {
					type: "Button",
					id: null,
					text: "",
					url: "",
					new_target: !1,
					defaultValue: !0
				},
				background1: {
					type: "Background",
					id: null,
					url: "http://uploads.strikinglycdn.com/static/backgrounds/abstract/69.jpg",
					sizing: "cover",
					textColor: "light",
					backgroundVariation: "",
					videoUrl: "",
					videoHtml: "",
					defaultValue: !0
				}
			}
		}
	}
});