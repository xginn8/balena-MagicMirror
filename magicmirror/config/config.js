/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "::", // Address to listen on, can be:
                          // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                          // - another specific IPv4/6 to listen on a specific interface
                          // - "", "0.0.0.0", "::" to listen on any interface
                          // Default, when address config is left out, is "localhost"
    port: 90,             // Port 8080 is already used by the "Browser" service
    ipWhitelist: [], // Set [] to allow all IP addresses
                                                           // or add a specific IPv4 of 192.168.1.5 :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                           // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                           // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 24,
    units: "imperial",

    modules: [
        {
            module: "alert"
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left",
            config: {
                timezone: 'America/New_York'
            }
        },
        {
            module: "calendar",
            header: "",
            position: "top_left",
            classes: 'known',
            maximumEntries: 5,
            config: {
                calendars: [
                    {
                        name: "home",
                        symbol: "home",
                        url: "https://calendar.google.com/calendar/ical/ma90rms2b5td4laasp8ro4q080%40group.calendar.google.com/private-20ebd43b53e6d47446f49720d6240e61/basic.ics"
                    }
                ]
            }
        },
        {
               module: 'weather',
               position: 'top_right',
               config: {
                   weatherProvider: "weathergov",
                   css: "NOAA3",
                   lat: "41.138833",
                   lon: "-74.669845"
                }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
