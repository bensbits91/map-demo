import { IPersonaProps, /* IPersonaSharedProps,  */Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
const users = [
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Elke',
            'last': 'Schnoor'
        },
        'location': {
            'street': {
                'number': 8405,
                'nameObj': 'Ringstraße'
            },
            'city': 'Stade',
            'state': 'Hamburg',
            'country': 'Germany',
            'postcode': 85022,
            'coordinates': {
                'latitude': '-73.7051',
                'longitude': '108.8626'
            },
            'timezone': {
                'offset': '-6:00',
                'description': 'Central Time (US & Canada), Mexico City'
            }
        },
        'email': 'elke.schnoor@example.com',
        'login': {
            'uuid': '9d9bf7fb-54c7-41fa-a97d-3f4c43dcd5dd',
            'username': 'angryleopard412',
            'password': 'sascha',
            'salt': '1WZijGY6',
            'md5': 'd92b64ccb5fb1dda0b2f189d7821c8ff',
            'sha1': '153bce8ed72ec632c4c787c13e3c4f62fa9c3d0e',
            'sha256': '583e2d300887b3c39909feccbb4c048eb4f59a5c73d04c270f84b1e6d5e01ded'
        },
        'dob': {
            'date': '1991-04-23T07:56:40.056Z',
            'age': 29
        },
        'registered': {
            'date': '2004-10-02T20:34:54.677Z',
            'age': 16
        },
        'phone': '0791-8273305',
        'cell': '0178-0942054',
        'id': '1',
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/58.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/58.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/58.jpg'
        },
        'nat': 'DE',
        'parentId': null,
        'title': 'Founder, CEO',
        'department': '',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Javier',
            'last': 'Collins'
        },
        'location': {
            'street': {
                'number': 1933,
                'nameObj': 'Thornridge Cir'
            },
            'city': 'Surrey',
            'state': 'Louisiana',
            'country': 'United States',
            'postcode': 62559,
            'coordinates': {
                'latitude': '85.3075',
                'longitude': '-177.5216'
            },
            'timezone': {
                'offset': '+10:00',
                'description': 'Eastern Australia, Guam, Vladivostok'
            }
        },
        'email': 'javier.collins@example.com',
        'login': {
            'uuid': '72f3de59-8df8-4997-8d6b-2de3c6ab530b',
            'username': 'happypanda213',
            'password': 'spunky',
            'salt': 'FZ0IMMEb',
            'md5': '56be28ef86211514d05b15dcaa44654a',
            'sha1': 'fda94fd7ad41d69bdd6f3f63cd6bd7f15c214997',
            'sha256': 'ba65f3e9087705f986999548290635cafcf95948c9a4277b7b346d2625f72f5f'
        },
        'dob': {
            'date': '1988-10-19T00:16:15.577Z',
            'age': 32
        },
        'registered': {
            'date': '2018-01-02T17:20:18.320Z',
            'age': 2
        },
        'phone': '(746)-732-0608',
        'cell': '(685)-794-9732',
        'id': '2',
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/19.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/19.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/19.jpg'
        },
        'nat': 'US',
        'parentId': '1',
        'title': 'COO',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Ms',
            'first': 'Lison',
            'last': 'Picard'
        },
        'location': {
            'street': {
                'number': 3912,
                'nameObj': 'Rue des Cuirassiers'
            },
            'city': 'Nîmes',
            'state': 'Vaucluse',
            'country': 'France',
            'postcode': 36500,
            'coordinates': {
                'latitude': '51.2367',
                'longitude': '120.0723'
            },
            'timezone': {
                'offset': '+5:30',
                'description': 'Bombay, Calcutta, Madras, New Delhi'
            }
        },
        'email': 'lison.picard@example.com',
        'login': {
            'uuid': '228cec08-5d2a-4cf3-94b5-508d0f740867',
            'username': 'orangefrog356',
            'password': 'madness',
            'salt': 'GEjdyjJD',
            'md5': '454aeb8d763245c4152e1f84832de80a',
            'sha1': 'bfc03d066a84c9e9eafb50dcfbdfa4edb81406df',
            'sha256': '9d0ad460e30f55005ba626b593ec066d0c3848ceb9c6d63eec1b3429cdcb4ed8'
        },
        'dob': {
            'date': '1950-12-07T16:27:58.821Z',
            'age': 70
        },
        'registered': {
            'date': '2019-06-24T04:17:08.272Z',
            'age': 1
        },
        'phone': '05-59-94-33-21',
        'cell': '06-12-35-27-18',
        'id': 3,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/50.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/50.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/50.jpg'
        },
        'nat': 'FR',
        'parentId': 1,
        'title': 'CFO',
        'department': 'Finance',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Isabella',
            'last': 'Walker'
        },
        'location': {
            'street': {
                'number': 7504,
                'nameObj': 'Wainoni Road'
            },
            'city': 'Wellington',
            'state': 'Waikato',
            'country': 'New Zealand',
            'postcode': 91895,
            'coordinates': {
                'latitude': '16.6172',
                'longitude': '25.5575'
            },
            'timezone': {
                'offset': '+3:00',
                'description': 'Baghdad, Riyadh, Moscow, St. Petersburg'
            }
        },
        'email': 'isabella.walker@example.com',
        'login': {
            'uuid': 'dfb6baf4-8720-4629-b985-41f8f8ff7444',
            'username': 'silvermouse285',
            'password': 'generic',
            'salt': 'Y0GuauKL',
            'md5': 'fbe6060f4063461a77383db96a1dab42',
            'sha1': 'd85f85a9e27076f67ecc06c43794d099b068ca09',
            'sha256': 'c10f606de024887c2d002cb3e010b3f27c85e080623d5a50b9c0ce4c9092f96a'
        },
        'dob': {
            'date': '1949-12-27T04:56:10.951Z',
            'age': 71
        },
        'registered': {
            'date': '2019-04-14T21:28:32.998Z',
            'age': 1
        },
        'phone': '(264)-475-0590',
        'cell': '(920)-762-7313',
        'id': 4,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/4.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/4.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/4.jpg'
        },
        'nat': 'NZ',
        'parentId': 1,
        'title': 'CMO',
        'department': 'Marketing',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Alma',
            'last': 'Madsen'
        },
        'location': {
            'street': {
                'number': 2559,
                'nameObj': 'Nørremarksvej'
            },
            'city': 'Assens',
            'state': 'Hovedstaden',
            'country': 'Denmark',
            'postcode': 41335,
            'coordinates': {
                'latitude': '-61.0794',
                'longitude': '-119.7644'
            },
            'timezone': {
                'offset': '-4:00',
                'description': 'Atlantic Time (Canada), Caracas, La Paz'
            }
        },
        'email': 'alma.madsen@example.com',
        'login': {
            'uuid': '3584c1ef-3361-4056-90dc-6d48ceededf8',
            'username': 'goldenmeercat752',
            'password': 'travis1',
            'salt': 'HTA1Tctp',
            'md5': '7ef0fc0812d8a8a2e5cd1c274d05c93c',
            'sha1': '196640ab23150c6946e9a5642715b336973e33cf',
            'sha256': '0d8775a9445ca19703dbfa561b0eb512b3b4b01d2eb87eabb85b0e74d9606d6f'
        },
        'dob': {
            'date': '1948-10-11T08:47:49.900Z',
            'age': 72
        },
        'registered': {
            'date': '2017-02-17T16:37:25.302Z',
            'age': 3
        },
        'phone': '08803076',
        'cell': '95286780',
        'id': 5,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/70.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/70.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/70.jpg'
        },
        // 'picture': {
        //     'large': 'https://randomuser.me/api/portraits/women/58.jpg',
        //     'medium': 'https://randomuser.me/api/portraits/med/women/58.jpg',
        //     'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/58.jpg'
        // },
        'nat': 'DK',
        'parentId': 2,
        'title': 'VP Operations',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.busy
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Amber',
            'last': 'Ellis'
        },
        'location': {
            'street': {
                'number': 99,
                'nameObj': 'Hickory Creek Dr'
            },
            'city': 'Kalgoorlie',
            'state': 'Australian Capital Territory',
            'country': 'Australia',
            'postcode': 5114,
            'coordinates': {
                'latitude': '-31.5845',
                'longitude': '-174.8092'
            },
            'timezone': {
                'offset': '+1:00',
                'description': 'Brussels, Copenhagen, Madrid, Paris'
            }
        },
        'email': 'amber.ellis@example.com',
        'login': {
            'uuid': '5996ca31-f04a-467b-908f-0e41ba3c5254',
            'username': 'silvermeercat766',
            'password': 'rusty',
            'salt': 'a7x0y9aC',
            'md5': '4100b47f787d357400ad62c995472272',
            'sha1': 'adc6424742c5cbbeccf03734b8fd24b23dc827e1',
            'sha256': 'b962b0483eb1569e20f9c901722de3feea30b4e7a63f40004984d4778b0e58ce'
        },
        'dob': {
            'date': '1975-08-31T14:36:44.567Z',
            'age': 45
        },
        'registered': {
            'date': '2008-03-11T19:54:16.941Z',
            'age': 12
        },
        'phone': '09-2342-7351',
        'cell': '0418-371-126',
        'id': 6,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/84.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/84.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/84.jpg'
        },
        'nat': 'AU',
        'parentId': 2,
        'title': 'VP Operations',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.dnd
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Mrs',
            'first': 'Ariane',
            'last': 'Fortin'
        },
        'location': {
            'street': {
                'number': 714,
                'nameObj': 'Frederick Ave'
            },
            'city': 'Carleton',
            'state': 'New Brunswick',
            'country': 'Canada',
            'postcode': 'J0Y 3Z4',
            'coordinates': {
                'latitude': '65.2695',
                'longitude': '-169.6408'
            },
            'timezone': {
                'offset': '+6:00',
                'description': 'Almaty, Dhaka, Colombo'
            }
        },
        'email': 'ariane.fortin@example.com',
        'login': {
            'uuid': '73449145-8b6d-4b05-be59-b1d91ee151ba',
            'username': 'angrybird810',
            'password': 'patch',
            'salt': 'p4AJV89B',
            'md5': 'ac44a59159204ee08c443934cd7cff6c',
            'sha1': '1623f005d729106e6bc856b90858631f8bc2cbdb',
            'sha256': '56d0751d99fd83c6691d637142f4de9321278d53261188ae9391e0e96f4f1bfa'
        },
        'dob': {
            'date': '1947-10-29T01:43:10.643Z',
            'age': 73
        },
        'registered': {
            'date': '2016-12-27T08:37:55.403Z',
            'age': 4
        },
        'phone': '185-327-7200',
        'cell': '672-094-6552',
        'id': 7,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/4.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/4.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/4.jpg'
        },
        'nat': 'CA',
        'parentId': 2,
        'title': 'VP Operations',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Sedef',
            'last': 'Adıvar'
        },
        'location': {
            'street': {
                'number': 5492,
                'nameObj': 'Tunalı Hilmi Cd'
            },
            'city': 'Denizli',
            'state': 'Sinop',
            'country': 'Turkey',
            'postcode': 30662,
            'coordinates': {
                'latitude': '78.6579',
                'longitude': '35.9403'
            },
            'timezone': {
                'offset': '-1:00',
                'description': 'Azores, Cape Verde Islands'
            }
        },
        'email': 'sedef.adivar@example.com',
        'login': {
            'uuid': '4c9bd1c7-7608-4034-b057-090f6f6f07cc',
            'username': 'heavyswan813',
            'password': 'hawaiian',
            'salt': 'Ioo9nuGs',
            'md5': 'c791a3d496dc89098c0f600269557a9b',
            'sha1': 'd4f15eaa4808c8efcb0abb223d07b01beb219a14',
            'sha256': '31c347bd7c993e2903ca570daaaab3167f6c84f862d7661b90af606a141010dc'
        },
        'dob': {
            'date': '1993-03-06T07:12:56.991Z',
            'age': 27
        },
        'registered': {
            'date': '2017-10-26T21:19:35.181Z',
            'age': 3
        },
        'phone': '(502)-206-7403',
        'cell': '(860)-386-2502',
        'id': 8,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/76.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/76.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/76.jpg'
        },
        'nat': 'TR',
        'parentId': 4,
        'title': 'VP Marketing',
        'department': 'Marketing',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Mrs',
            'first': 'Ambre',
            'last': 'Robin'
        },
        'location': {
            'street': {
                'number': 2523,
                'nameObj': 'Rue du Village'
            },
            'city': 'Nice',
            'state': 'Rhône',
            'country': 'France',
            'postcode': 20129,
            'coordinates': {
                'latitude': '17.7937',
                'longitude': '86.4056'
            },
            'timezone': {
                'offset': '+4:00',
                'description': 'Abu Dhabi, Muscat, Baku, Tbilisi'
            }
        },
        'email': 'ambre.robin@example.com',
        'login': {
            'uuid': '95de4664-c581-42e6-b213-abbd839b4381',
            'username': 'crazymouse415',
            'password': 'guitar',
            'salt': 'pnYwkUsz',
            'md5': 'ca0408c23777ed9df70a1d7a9b86b8b9',
            'sha1': 'd40e6487ef5133550e640d63ad9802fee151b4ea',
            'sha256': 'ceea512a1b5069d4e61ce905fe631fc794e084d76848d8920d05cde418f43885'
        },
        'dob': {
            'date': '1957-03-22T21:38:50.967Z',
            'age': 63
        },
        'registered': {
            'date': '2016-07-01T23:07:09.310Z',
            'age': 4
        },
        'phone': '02-55-29-20-32',
        'cell': '06-24-47-40-23',
        'id': 9,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/74.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/74.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/74.jpg'
        },
        'nat': 'FR',
        'parentId': 4,
        'title': 'VP Marketing',
        'department': 'Marketing',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Jonas',
            'last': 'Christensen'
        },
        'location': {
            'street': {
                'number': 8568,
                'nameObj': 'Hybenvænget'
            },
            'city': 'Vipperød',
            'state': 'Hovedstaden',
            'country': 'Denmark',
            'postcode': 80287,
            'coordinates': {
                'latitude': '26.1432',
                'longitude': '-131.1443'
            },
            'timezone': {
                'offset': '-7:00',
                'description': 'Mountain Time (US & Canada)'
            }
        },
        'email': 'jonas.christensen@example.com',
        'login': {
            'uuid': '49c17142-3e69-4cff-aa01-c0d02c854cc4',
            'username': 'greenbutterfly722',
            'password': 'rage',
            'salt': 'wQOLl9jc',
            'md5': '32cb811174c61e83be84ab2fa862b9e5',
            'sha1': '37dc74f2d321ad4ab2e302a04e60ff0cd832409a',
            'sha256': '076c57f7c647c2e71cdea198200de65edf929d42d6d237d44b0edbaf1ae8bdd7'
        },
        'dob': {
            'date': '1988-06-28T11:39:57.753Z',
            'age': 32
        },
        'registered': {
            'date': '2009-02-04T10:52:21.303Z',
            'age': 11
        },
        'phone': '53470573',
        'cell': '24277881',
        'id': 10,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/76.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/76.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
        },
        'nat': 'DK',
        'parentId': 5,
        'title': 'Lead Developer',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Hans-Henning',
            'last': 'Graupner'
        },
        'location': {
            'street': {
                'number': 3637,
                'nameObj': 'Lindenweg'
            },
            'city': 'Greiz',
            'state': 'Thüringen',
            'country': 'Germany',
            'postcode': 18668,
            'coordinates': {
                'latitude': '-82.3553',
                'longitude': '-178.1971'
            },
            'timezone': {
                'offset': '-2:00',
                'description': 'Mid-Atlantic'
            }
        },
        'email': 'hans-henning.graupner@example.com',
        'login': {
            'uuid': 'ab30f6a9-8350-4f6f-be8e-0068a3b3833f',
            'username': 'happybird157',
            'password': 'krissy',
            'salt': 'JSUaKrYD',
            'md5': '04d5ba298a1be39ab40d61e4da1bcad7',
            'sha1': 'd2c45e2c927e7d6199a5bd28e2c128be4ce6aa95',
            'sha256': '0a4d4712a9a0c76ae28f6e9e3c40be4b1ffaecb12d8d6cebfbfde8d64c0acabe'
        },
        'dob': {
            'date': '1958-11-12T09:46:03.321Z',
            'age': 62
        },
        'registered': {
            'date': '2017-02-16T10:39:29.087Z',
            'age': 3
        },
        'phone': '0655-2725845',
        'cell': '0172-3985679',
        'id': 11,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/63.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/63.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/63.jpg'
        },
        'nat': 'DE',
        'parentId': 5,
        'title': 'Quality Assurance Manager',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Josep',
            'last': 'Lopez'
        },
        'location': {
            'street': {
                'number': 5909,
                'nameObj': 'Calle de Segovia'
            },
            'city': 'Madrid',
            'state': 'País Vasco',
            'country': 'Spain',
            'postcode': 88635,
            'coordinates': {
                'latitude': '-51.2379',
                'longitude': '-62.1911'
            },
            'timezone': {
                'offset': '+5:00',
                'description': 'Ekaterinburg, Islamabad, Karachi, Tashkent'
            }
        },
        'email': 'josep.lopez@example.com',
        'login': {
            'uuid': '8467dcee-c903-440a-b706-d906da48037b',
            'username': 'brownsnake170',
            'password': 'gertrude',
            'salt': '6yy1BEkE',
            'md5': '369f66431c5edf3d227eb135fe869645',
            'sha1': '33e4b27924000cad2ac14beefa1ea6295ca18522',
            'sha256': '65fcb0868dbdcea4056a3707c97804a4feecba64f90ee086a7c8233cc7901f3f'
        },
        'dob': {
            'date': '1952-02-14T19:15:30.057Z',
            'age': 68
        },
        'registered': {
            'date': '2009-01-03T00:38:34.024Z',
            'age': 11
        },
        'phone': '926-125-870',
        'cell': '603-815-147',
        'id': 12,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/84.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/84.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/84.jpg'
        },
        'nat': 'ES',
        'parentId': 5,
        'title': 'UX/UI Design Lead',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Rene',
            'last': 'Bates'
        },
        'location': {
            'street': {
                'number': 3185,
                'nameObj': 'Prospect Rd'
            },
            'city': 'Caldwell',
            'state': 'Florida',
            'country': 'United States',
            'postcode': 24896,
            'coordinates': {
                'latitude': '-77.5384',
                'longitude': '136.0803'
            },
            'timezone': {
                'offset': '0:00',
                'description': 'Western Europe Time, London, Lisbon, Casablanca'
            }
        },
        'email': 'rene.bates@example.com',
        'login': {
            'uuid': '894d9c13-3d52-4b46-a4a5-3dc5893f4053',
            'username': 'brownkoala826',
            'password': 'pppppppp',
            'salt': '9dHnFslt',
            'md5': 'ddf4174239e75f460e7a6d4127f1d323',
            'sha1': 'aab1d01a217ac473a61490bb54daba51325065b5',
            'sha256': '520abac45568b7cf4b1ae72e7e00eaa17cf3c3c775b5633988698d42640da729'
        },
        'dob': {
            'date': '1962-07-12T09:41:12.084Z',
            'age': 58
        },
        'registered': {
            'date': '2017-07-10T14:36:49.532Z',
            'age': 3
        },
        'phone': '(183)-503-0238',
        'cell': '(184)-610-0021',
        'id': 13,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/7.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/7.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
        },
        'nat': 'US',
        'parentId': 10,
        'title': 'Senior Software Developer',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Tércio',
            'last': 'Pires'
        },
        'location': {
            'street': {
                'number': 9869,
                'nameObj': 'Beco dos Namorados'
            },
            'city': 'Cametá',
            'state': 'Tocantins',
            'country': 'Brazil',
            'postcode': 74861,
            'coordinates': {
                'latitude': '-52.1875',
                'longitude': '-25.4204'
            },
            'timezone': {
                'offset': '-3:30',
                'description': 'Newfoundland'
            }
        },
        'email': 'tercio.pires@example.com',
        'login': {
            'uuid': '7b70355c-404f-415d-b526-13d5f4c5ba92',
            'username': 'yellowzebra333',
            'password': 'bobafett',
            'salt': '59WIqxxI',
            'md5': 'c3ddef3487681665eb6c037a58dc96a4',
            'sha1': '9fc651b10278adb66df3667be174b93cb6441217',
            'sha256': '4a2b8520a3dc03de1307c9df8a8daea77765ac17b87670c127dd377cbdf6c0d8'
        },
        'dob': {
            'date': '1985-07-21T13:44:23.586Z',
            'age': 35
        },
        'registered': {
            'date': '2007-07-06T09:48:03.691Z',
            'age': 13
        },
        'phone': '(05) 6439-0934',
        'cell': '(33) 5135-4923',
        'id': 14,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/54.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/54.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/54.jpg'
        },
        'nat': 'BR',
        'parentId': 10,
        'title': 'Software Developer',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Ms',
            'first': 'Ceylan',
            'last': 'Adan'
        },
        'location': {
            'street': {
                'number': 2672,
                'nameObj': 'Fatih Sultan Mehmet Cd'
            },
            'city': 'Isparta',
            'state': 'Kars',
            'country': 'Turkey',
            'postcode': 21194,
            'coordinates': {
                'latitude': '85.8370',
                'longitude': '-123.7167'
            },
            'timezone': {
                'offset': '+5:00',
                'description': 'Ekaterinburg, Islamabad, Karachi, Tashkent'
            }
        },
        'email': 'ceylan.adan@example.com',
        'login': {
            'uuid': '0b51bc6c-867b-418c-9473-bcce2faec336',
            'username': 'brownzebra323',
            'password': 'acer',
            'salt': 'tVmHAzXz',
            'md5': 'bbf38cb643ed7077213b6ef84d2e55ec',
            'sha1': '00bb72a6894ab9320b79627ffd40199176cddd69',
            'sha256': 'ba39b56c7e62ab8e97f2fc7940586b41c3bb346e263036477be1bbe981a7014c'
        },
        'dob': {
            'date': '1968-06-16T13:43:51.353Z',
            'age': 52
        },
        'registered': {
            'date': '2017-07-11T19:33:05.373Z',
            'age': 3
        },
        'phone': '(906)-993-1367',
        'cell': '(499)-663-0144',
        'id': 15,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/66.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/66.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/66.jpg'
        },
        'nat': 'TR',
        'parentId': 11,
        'title': 'QA Specialist',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Eliezer',
            'last': 'Rezende'
        },
        'location': {
            'street': {
                'number': 4425,
                'nameObj': 'Rua Doze '
            },
            'city': 'Rondonópolis',
            'state': 'Bahia',
            'country': 'Brazil',
            'postcode': 10537,
            'coordinates': {
                'latitude': '-44.4628',
                'longitude': '-45.2122'
            },
            'timezone': {
                'offset': '+9:30',
                'description': 'Adelaide, Darwin'
            }
        },
        'email': 'eliezer.rezende@example.com',
        'login': {
            'uuid': '595f19bc-094c-4786-814d-aa984b49c794',
            'username': 'purplerabbit218',
            'password': 'oranges',
            'salt': 'kCC3nkXk',
            'md5': '2d7a8bf66ad343a9e2c34711c3a616b7',
            'sha1': '87884d6ad631c5e3f8ed536ac6c934d1a2adab4d',
            'sha256': '31cc59c9cf8c3ecf4960d8d18050dc356fed0822037241fe1bd35b54d6a836d8'
        },
        'dob': {
            'date': '1970-03-31T00:43:28.853Z',
            'age': 50
        },
        'registered': {
            'date': '2003-09-08T19:38:09.349Z',
            'age': 17
        },
        'phone': '(94) 6447-1113',
        'cell': '(45) 2524-6944',
        'id': 16,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/41.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/41.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/41.jpg'
        },
        'nat': 'BR',
        'parentId': 11,
        'title': 'QA Specialist',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'male',
        'nameObj': {
            'title': 'Mr',
            'first': 'Marcellus',
            'last': 'Makkink'
        },
        'location': {
            'street': {
                'number': 7316,
                'nameObj': 'Broeksteegje'
            },
            'city': 'Beusichem',
            'state': 'Flevoland',
            'country': 'Netherlands',
            'postcode': 50425,
            'coordinates': {
                'latitude': '-23.8453',
                'longitude': '169.3038'
            },
            'timezone': {
                'offset': '+3:00',
                'description': 'Baghdad, Riyadh, Moscow, St. Petersburg'
            }
        },
        'email': 'marcellus.makkink@example.com',
        'login': {
            'uuid': 'e8abe67a-7a99-48ed-a66d-772763c126d4',
            'username': 'yellowladybug439',
            'password': 'doberman',
            'salt': 'P56OUCwP',
            'md5': 'ff85b96dbed82179ffb53eae99888205',
            'sha1': 'b17a95c586322f6b00ce84d8fd357db23b271e78',
            'sha256': 'bc9bee928a988a6295e211864eb483065c5d37950e0c32d39bbe35dc34f5f037'
        },
        'dob': {
            'date': '1979-10-02T19:13:59.057Z',
            'age': 41
        },
        'registered': {
            'date': '2006-12-20T08:04:56.841Z',
            'age': 14
        },
        'phone': '(636)-677-0573',
        'cell': '(870)-491-9225',
        'id': 17,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/men/44.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/men/44.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/44.jpg'
        },
        'nat': 'NL',
        'parentId': 12,
        'title': 'Graphic Artist',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Ms',
            'first': 'Annabelle',
            'last': 'Zhang'
        },
        'location': {
            'street': {
                'number': 441,
                'nameObj': 'Abbotts Way'
            },
            'city': 'Timaru',
            'state': 'Tasman',
            'country': 'New Zealand',
            'postcode': 95785,
            'coordinates': {
                'latitude': '29.0071',
                'longitude': '-118.9810'
            },
            'timezone': {
                'offset': '-5:00',
                'description': 'Eastern Time (US & Canada), Bogota, Lima'
            }
        },
        'email': 'annabelle.zhang@example.com',
        'login': {
            'uuid': '48dc105d-2827-4bac-a52e-982f6c075a22',
            'username': 'brownkoala698',
            'password': 'kittie',
            'salt': 'YsGM1dW0',
            'md5': '9092a4b68ea2e17123dd4fbf32b03654',
            'sha1': '080411594a5ea9fa9e26dbc9a7b0042b3d0b6b63',
            'sha256': '05c2e59cdf27ddfab5782fdb427a4637b0f191cc1d1bb5870e629fbb7a4ad55a'
        },
        'dob': {
            'date': '1982-11-06T02:00:22.769Z',
            'age': 38
        },
        'registered': {
            'date': '2005-01-12T15:22:23.933Z',
            'age': 15
        },
        'phone': '(100)-520-5989',
        'cell': '(703)-031-9068',
        'id': 18,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/62.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/62.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/62.jpg'
        },
        'nat': 'NZ',
        'parentId': 12,
        'title': 'Business Analyst',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Miss',
            'first': 'Irene',
            'last': 'Bohn'
        },
        'location': {
            'street': {
                'number': 6191,
                'nameObj': 'Berliner Straße'
            },
            'city': 'Lippe',
            'state': 'Nordrhein-Westfalen',
            'country': 'Germany',
            'postcode': 52710,
            'coordinates': {
                'latitude': '-60.2074',
                'longitude': '173.2370'
            },
            'timezone': {
                'offset': '+4:30',
                'description': 'Kabul'
            }
        },
        'email': 'irene.bohn@example.com',
        'login': {
            'uuid': '0838424b-37c5-4d12-a480-6135d2d69201',
            'username': 'whitewolf170',
            'password': 'soulmate',
            'salt': 'Tpg2ZweQ',
            'md5': '99b59b8d075c15c60f9b3b87550ce0d4',
            'sha1': '7c37be4c5bfde2180a2f124912d25273b9034c1f',
            'sha256': 'c225a0f1a041730267c581c3654e92c643c23c011a4fcba4c12b303f1b35d6f6'
        },
        'dob': {
            'date': '1961-07-12T02:11:50.859Z',
            'age': 59
        },
        'registered': {
            'date': '2016-09-03T20:00:01.012Z',
            'age': 4
        },
        'phone': '0872-3474912',
        'cell': '0179-9310335',
        'id': 19,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/1.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/1.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
        },
        'nat': 'DE',
        'parentId': 10,
        'title': 'Software Architect',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.online
    },
    {
        'gender': 'female',
        'nameObj': {
            'title': 'Mrs',
            'first': 'Ellen',
            'last': 'Hernandez'
        },
        'location': {
            'street': {
                'number': 2390,
                'nameObj': 'Valley View Ln'
            },
            'city': 'Elk Grove',
            'state': 'Michigan',
            'country': 'United States',
            'postcode': 65454,
            'coordinates': {
                'latitude': '-87.4950',
                'longitude': '-94.5363'
            },
            'timezone': {
                'offset': '+7:00',
                'description': 'Bangkok, Hanoi, Jakarta'
            }
        },
        'email': 'ellen.hernandez@example.com',
        'login': {
            'uuid': '287d2bc2-bc11-4ec4-b12f-befc846682ff',
            'username': 'smallladybug731',
            'password': '12121212',
            'salt': 'M3PG8ZZV',
            'md5': '5bc66259d12e77cb88baa711c0e32629',
            'sha1': 'd137c7931f08838029aa14a83a83ec8f584958ab',
            'sha256': '17f887f4773630c4cdb3f31c40537906d0e57df1cb8fcc8322b4a1474db9e287'
        },
        'dob': {
            'date': '1986-06-22T01:38:00.488Z',
            'age': 34
        },
        'registered': {
            'date': '2009-03-22T19:30:51.415Z',
            'age': 11
        },
        'phone': '(093)-208-7798',
        'cell': '(568)-257-4764',
        'id': 20,
        'picture': {
            'large': 'https://randomuser.me/api/portraits/women/77.jpg',
            'medium': 'https://randomuser.me/api/portraits/med/women/77.jpg',
            'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
        },
        'nat': 'US',
        'parentId': 11,
        'title': 'Test Execution Manager',
        'department': 'Operations',
        'hiredate': '1991-04-23T07:56:40.056Z',
        'children': null,
        'presence': PersonaPresence.away
    }
];

export default users;