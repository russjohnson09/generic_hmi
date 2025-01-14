let capabilities = {
	"MEDIA": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "mainField1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "statusBar",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mediaClock",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mediaTrack",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 360,
						"resolutionHeight": 360
					}
				}
			],
			"mediaClockFormats": ["CLOCK3", "CLOCKTEXT4"],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		],
		"buttonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"name": "OK"
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"name": "PLAY_PAUSE"
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"name": "SEEKLEFT"
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"name": "SEEKRIGHT"
			}
		]
	},
	"NON-MEDIA": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "mainField1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField4",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 410,
						"resolutionHeight": 410
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"LARGE_GRAPHIC_WITH_SOFTBUTTONS": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 915,
						"resolutionHeight": 490
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"DOUBLE_GRAPHIC_WITH_SOFTBUTTONS": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 480,
						"resolutionHeight": 480
					}
				},
				{
					"name": "secondaryGraphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 480,
						"resolutionHeight": 480
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"LARGE_GRAPHIC_ONLY": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 915,
						"resolutionHeight": 490
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"GRAPHIC_WITH_TEXTBUTTONS": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 410,
						"resolutionHeight": 410
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"TEXTBUTTONS_WITH_GRAPHIC": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 410,
						"resolutionHeight": 410
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"TEXTBUTTONS_ONLY": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"TEXT_WITH_GRAPHIC": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "mainField1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField4",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 410,
						"resolutionHeight": 410
					}
				}
			],
			"mediaClockFormats": ["CLOCK3", "CLOCKTEXT4"],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"GRAPHIC_WITH_TEXT": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "mainField1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "mainField4",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "graphic",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 410,
						"resolutionHeight": 410
					}
				}
			],
			"mediaClockFormats": ["CLOCK3", "CLOCKTEXT4"],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"TILES_ONLY": {
		"displayCapabilities": {
			"displayType": "SDL_GENERIC",
			"displayName": "GENERIC_DISPLAY",
			"textFields": [{
					"name": "alertText1",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText2",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "alertText3",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuName",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "secondaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "tertiaryText",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				},
				{
					"name": "menuTitle",
					"characterSet": "TYPE2SET",
					"width": 500,
					"rows": 1
				}
			],
			"imageFields": [{
					"name": "choiceImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "softButtonImage",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				},
				{
					"name": "menuIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 40,
						"resolutionHeight": 40
					}
				},
				{
					"name": "cmdIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 150,
						"resolutionHeight": 150
					}
				},
				{
					"name": "appIcon",
					"imageTypeSupported": ["GRAPHIC_PNG"],
					"imageResolution": {
						"resolutionWidth": 50,
						"resolutionHeight": 50
					}
				}
			],
			"mediaClockFormats": [],
			"graphicSupported": true,
			"templatesAvailable": [
				"DEFAULT", "MEDIA", "NON-MEDIA", "LARGE_GRAPHIC_WITH_SOFTBUTTONS", "LARGE_GRAPHIC_ONLY",
				"GRAPHIC_WITH_TEXTBUTTONS", "TEXTBUTTONS_WITH_GRAPHIC", "TEXTBUTTONS_ONLY",
				"TEXT_WITH_GRAPHIC", "GRAPHIC_WITH_TEXT", "DOUBLE_GRAPHIC_WITH_SOFTBUTTONS"
			],
			"screenParams": {
				"resolution": {
					"resolutionWidth": 960,
					"resolutionHeight": 675
				},
				"touchEventAvailable": {
					"pressAvailable": true,
					"multiTouchAvailable": false,
					"doublePressAvailable": false
				}
			},
			"imageCapabilities": ["DYNAMIC", "STATIC"]
		},
		"softButtonCapabilities": [{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			},
			{
				"shortPressAvailable": true,
				"longPressAvailable": false,
				"upDownAvailable": false,
				"imageSupported": true
			}
		]
	},
	"COMMON": {
		"audioPassThruCapabilities": {
			"samplingRate": "44KHZ",
			"bitsPerSample": "8_BIT",
			"audioType": "PCM"
		},
		"speechCapabilities": [
			"FILE"
		],
		"prerecordedSpeechCapabilities": ["INITIAL_JINGLE"],
		"hmiZoneCapabilities": "FRONT",
		"hmiCapabilities": {
			"navigation": false,
			"phoneCall": false,
			"videoStreaming": false
		},
		"systemCapabilities": {
			"navigationCapability": {
				"sendLocationEnabled": false,
				"getWayPointsEnabled": false
			},
			"phoneCapability": {
				"dialNumberEnabled": false
			}
		}
	}
}

export default capabilities;
