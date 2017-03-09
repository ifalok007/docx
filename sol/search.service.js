(function() {
    'use strict';

    angular.module('counselLinkTechEval').factory('SearchAcross', SearchAcross);

    SearchAcross.$inject = ['$q', '$resource'];

    function SearchAcross($q, $resource) {
        return {
            search: search,
            doSearch: doSearch()
        };

        function doSearch() {
            var resourceUrl = 'api/search/:keyword';

            return $resource(resourceUrl, {}, {
                'get': {
                    method: 'GET',
                    isArray: true,
                    transformResponse: function(data) {
                        if (data) {
                            data = angular.fromJson(data);
                        }
                        return data;
                    }
                }
            });
        }

        function search() {
            var results = [{
                "id": 1,
                "albumName": "For Those About To Rock We Salute You",
                "artist": {
                    "id": 1,
                    "artistName": "AC/DC"
                },
                "songs": [{
                    "id": 1,
                    "songName": "For Those About To Rock (We Salute You)",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 343719
                }, {
                    "id": 6,
                    "songName": "Put The Finger On You",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 205662
                }, {
                    "id": 7,
                    "songName": "Let's Get It Up",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 233926
                }, {
                    "id": 8,
                    "songName": "Inject The Venom",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 210834
                }, {
                    "id": 9,
                    "songName": "Snowballed",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 203102
                }, {
                    "id": 10,
                    "songName": "Evil Walks",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 263497
                }, {
                    "id": 11,
                    "songName": "C.O.D.",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 199836
                }, {
                    "id": 12,
                    "songName": "Breaking The Rules",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 263288
                }, {
                    "id": 13,
                    "songName": "Night Of The Long Knives",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 205688
                }, {
                    "id": 14,
                    "songName": "Spellbound",
                    "composer": "Angus Young, Malcolm Young, Brian Johnson",
                    "length": 270863
                }]
            }, {
                "id": 2,
                "albumName": "Balls to the Wall",
                "artist": {
                    "id": 2,
                    "artistName": "Accept"
                },
                "songs": [{
                    "id": 2,
                    "songName": "Balls to the Wall",
                    "composer": null,
                    "length": 342562
                }]
            }, {
                "id": 3,
                "albumName": "Restless and Wild",
                "artist": {
                    "id": 2,
                    "artistName": "Accept"
                },
                "songs": [{
                    "id": 3,
                    "songName": "Fast As a Shark",
                    "composer": "F. Baltes, S. Kaufman, U. Dirkscneider & W. Hoffman",
                    "length": 230619
                }, {
                    "id": 4,
                    "songName": "Restless and Wild",
                    "composer": "F. Baltes, R.A. Smith-Diesel, S. Kaufman, U. Dirkscneider & W. Hoffman",
                    "length": 252051
                }, {
                    "id": 5,
                    "songName": "Princess of the Dawn",
                    "composer": "Deaffy & R.A. Smith-Diesel",
                    "length": 375418
                }]
            }, {
                "id": 4,
                "albumName": "Let There Be Rock",
                "artist": {
                    "id": 1,
                    "artistName": "AC/DC"
                },
                "songs": [{
                    "id": 15,
                    "songName": "Go Down",
                    "composer": "AC/DC",
                    "length": 331180
                }, {
                    "id": 16,
                    "songName": "Dog Eat Dog",
                    "composer": "AC/DC",
                    "length": 215196
                }, {
                    "id": 17,
                    "songName": "Let There Be Rock",
                    "composer": "AC/DC",
                    "length": 366654
                }, {
                    "id": 18,
                    "songName": "Bad Boy Boogie",
                    "composer": "AC/DC",
                    "length": 267728
                }, {
                    "id": 19,
                    "songName": "Problem Child",
                    "composer": "AC/DC",
                    "length": 325041
                }, {
                    "id": 20,
                    "songName": "Overdose",
                    "composer": "AC/DC",
                    "length": 369319
                }, {
                    "id": 21,
                    "songName": "Hell Ain't A Bad Place To Be",
                    "composer": "AC/DC",
                    "length": 254380
                }, {
                    "id": 22,
                    "songName": "Whole Lotta Rosie",
                    "composer": "AC/DC",
                    "length": 323761
                }]
            }, {
                "id": 5,
                "albumName": "Big Ones",
                "artist": {
                    "id": 3,
                    "artistName": "Aerosmith"
                },
                "songs": [{
                    "id": 23,
                    "songName": "Walk On Water",
                    "composer": "Steven Tyler, Joe Perry, Jack Blades, Tommy Shaw",
                    "length": 295680
                }, {
                    "id": 24,
                    "songName": "Love In An Elevator",
                    "composer": "Steven Tyler, Joe Perry",
                    "length": 321828
                }, {
                    "id": 25,
                    "songName": "Rag Doll",
                    "composer": "Steven Tyler, Joe Perry, Jim Vallance, Holly Knight",
                    "length": 264698
                }, {
                    "id": 26,
                    "songName": "What It Takes",
                    "composer": "Steven Tyler, Joe Perry, Desmond Child",
                    "length": 310622
                }, {
                    "id": 27,
                    "songName": "Dude (Looks Like A Lady)",
                    "composer": "Steven Tyler, Joe Perry, Desmond Child",
                    "length": 264855
                }, {
                    "id": 28,
                    "songName": "Janie's Got A Gun",
                    "composer": "Steven Tyler, Tom Hamilton",
                    "length": 330736
                }, {
                    "id": 29,
                    "songName": "Cryin'",
                    "composer": "Steven Tyler, Joe Perry, Taylor Rhodes",
                    "length": 309263
                }, {
                    "id": 30,
                    "songName": "Amazing",
                    "composer": "Steven Tyler, Richie Supa",
                    "length": 356519
                }, {
                    "id": 31,
                    "songName": "Blind Man",
                    "composer": "Steven Tyler, Joe Perry, Taylor Rhodes",
                    "length": 240718
                }, {
                    "id": 32,
                    "songName": "Deuces Are Wild",
                    "composer": "Steven Tyler, Jim Vallance",
                    "length": 215875
                }, {
                    "id": 33,
                    "songName": "The Other Side",
                    "composer": "Steven Tyler, Jim Vallance",
                    "length": 244375
                }, {
                    "id": 34,
                    "songName": "Crazy",
                    "composer": "Steven Tyler, Joe Perry, Desmond Child",
                    "length": 316656
                }, {
                    "id": 35,
                    "songName": "Eat The Rich",
                    "composer": "Steven Tyler, Joe Perry, Jim Vallance",
                    "length": 251036
                }, {
                    "id": 36,
                    "songName": "Angel",
                    "composer": "Steven Tyler, Desmond Child",
                    "length": 307617
                }, {
                    "id": 37,
                    "songName": "Livin' On The Edge",
                    "composer": "Steven Tyler, Joe Perry, Mark Hudson",
                    "length": 381231
                }]
            }, {
                "id": 6,
                "albumName": "Jagged Little Pill",
                "artist": {
                    "id": 4,
                    "artistName": "Alanis Morissette"
                },
                "songs": [{
                    "id": 38,
                    "songName": "All I Really Want",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 284891
                }, {
                    "id": 39,
                    "songName": "You Oughta Know",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 249234
                }, {
                    "id": 40,
                    "songName": "Perfect",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 188133
                }, {
                    "id": 41,
                    "songName": "Hand In My Pocket",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 221570
                }, {
                    "id": 42,
                    "songName": "Right Through You",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 176117
                }, {
                    "id": 43,
                    "songName": "Forgiven",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 300355
                }, {
                    "id": 44,
                    "songName": "You Learn",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 239699
                }, {
                    "id": 45,
                    "songName": "Head Over Feet",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 267493
                }, {
                    "id": 46,
                    "songName": "Mary Jane",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 280607
                }, {
                    "id": 47,
                    "songName": "Ironic",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 229825
                }, {
                    "id": 48,
                    "songName": "Not The Doctor",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 227631
                }, {
                    "id": 49,
                    "songName": "Wake Up",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 293485
                }, {
                    "id": 50,
                    "songName": "You Oughta Know (Alternate)",
                    "composer": "Alanis Morissette & Glenn Ballard",
                    "length": 491885
                }]
            }];
            return results;
        }

    }
})();
