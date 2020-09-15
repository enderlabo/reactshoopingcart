const heroes = [
    {
        'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne'
    },
    {
        'id': 'dc-joker',
        'superhero':'Joker', 
        'publisher':'DC Comics', 
        'alter_ego':'Arthur Fleck',
        'first_appearance':'comic book Batman, en april 1940',
        'characters':'Arthur Fleck'
    },
    {
        'id': 'dc-a',
        'superhero':'Kid Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Wally West',
        'first_appearance':'The Flash Vol.1 #110 (enero de 1960)',
        'characters':'Wally West'
    },
    {
        'id': 'dc-impu',
        'superhero':'Impulse', 
        'publisher':'DC Comics', 
        'alter_ego':'Bart Allen',
        'first_appearance':' Legion of Super-Heroes (vol. 4) 13 (October 1990)',
        'characters':'Bart Allen'
    },
    {
        'id': 'dc-superman',
        'superhero':'Superman', 
        'publisher':'DC Comics', 
        'alter_ego':'Kal-El',
        'first_appearance':'Action Comics #1',
        'characters':'Kal-El'
    },
    {
        'id': 'dc-flash',
        'superhero':'Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Jay Garrick',
        'first_appearance':'Flash Comics #1',
        'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen'
    },
    {
        'id': 'dc-green',
        'superhero':'Green Lantern', 
        'publisher':'DC Comics', 
        'alter_ego':'Alan Scott',
        'first_appearance':'All-American Comics #16',
        'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
    },
    {
        'id': 'dc-arrow',
        'superhero':'Green Arrow', 
        'publisher':'DC Comics', 
        'alter_ego':'Oliver Queen',
        'first_appearance':'More Fun Comics #73',
        'characters':'Oliver Queen'
    },
    {
        'id': 'dc-wonder',
        'superhero':'Wonder Woman', 
        'publisher':'DC Comics', 
        'alter_ego':'Princess Diana',
        'first_appearance':'All Star Comics #8',
        'characters':'Princess Diana'
    },
    {
        'id': 'dc-martian',
        'superhero':'Martian Manhunter', 
        'publisher':'DC Comics', 
        'alter_ego':'J\'onn J\'onzz',
        'first_appearance':'Detective Comics #225',
        'characters':'Martian Manhunter'
    },
    {
        'id': 'dc-night',
        'superhero':'Robin/Nightwing', 
        'publisher':'DC Comics', 
        'alter_ego':'Dick Grayson',
        'first_appearance':'Detective Comics #38',
        'characters':'Dick Grayson'
    },
    {
        'id': 'dc-blue',
        'superhero':'Blue Beetle', 
        'publisher':'DC Comics', 
        'alter_ego':'Dan Garret',
        'first_appearance':'Mystery Men Comics #1',
        'characters':'Dan Garret, Ted Kord, Jaime Reyes'
    },
    {
        'id': 'dc-black',
        'superhero':'Black Canary', 
        'publisher':'DC Comics', 
        'alter_ego':'Dinah Drake',
        'first_appearance':'Flash Comics #86',
        'characters':'Dinah Drake, Dinah Lance'
    },
    {
        'id': 'dc-reverse',
        'superhero':'Reverse Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Professor Zoom',
        'first_appearance':' The Flash (vol. 1) nº139 (septiembre de 1963)',
        'characters':'Eoward Thawne'
    },
    {
        'id': 'dc-blackf',
        'superhero':'Black Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Death',
        'first_appearance':'The Flash (vol. 2) #138 (June 1998)',
        'characters':' '
    },
    {
        'id': 'dc-vibe',
        'superhero':'Vibe', 
        'publisher':'DC Comics', 
        'alter_ego':'Cisco Ramón',
        'first_appearance':'Liga de la Justicia de América Anual #2 (octubre de 1984)',
        'characters':'Cisco Ramón'
    },
    {
        'id': 'marvel-spider',
        'superhero':'Spider Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Peter Parker',
        'first_appearance':'Amazing Fantasy #15',
        'characters':'Peter Parker'
    },
    {
        'id': 'marvel-captain',
        'superhero':'Captain America', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Steve Rogers',
        'first_appearance':'Captain America Comics #1',
        'characters':'Steve Rogers'
    },
    {
        'id': 'marvel-iron',
        'superhero':'Iron Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Tony Stark',
        'first_appearance':'Tales of Suspense #39',
        'characters':'Tony Stark'
    },
    {
        'id': 'marvel-thor',
        'superhero':'Thor', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Thor Odinson',
        'first_appearance':'Journey into Myster #83',
        'characters':'Thor Odinson'
    },
    {
        'id': 'marvel-hulk',
        'superhero':'Hulk', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Bruce Banner',
        'first_appearance':'The Incredible Hulk #1',
        'characters':'Bruce Banner'
    },
    {
        'id': 'marvel-wolverine',
        'superhero':'Wolverine', 
        'publisher':'Marvel Comics', 
        'alter_ego':'James Howlett',
        'first_appearance':'The Incredible Hulk #180',
        'characters':'James Howlett'
    },
    {
        'id': 'marvel-daredevil',
        'superhero':'Daredevil', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Matthew Michael Murdock',
        'first_appearance':'Daredevil #1',
        'characters':'Matthew Michael Murdock'
    },
    {
        'id': 'marvel-hawkeye',
        'superhero':'Hawkeye', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Clinton Francis Barton',
        'first_appearance':'Tales of Suspense #57',
        'characters':'Clinton Francis Barton'
    },
    {
        'id': 'marvel-cyclops',
        'superhero':'Cyclops', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Scott Summers',
        'first_appearance':'X-Men #1',
        'characters':'Scott Summers'
    },
    {
        'id': 'marvel-silver',
        'superhero':'Silver Surfer', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Norrin Radd',
        'first_appearance':'The Fantastic Four #48',
        'characters':'Norrin Radd'
    },
    {
        'id': 'marvel-deadpool',
        'superhero':'DeadPool', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Wade Winston',
        'first_appearance':'New Mutants (vol. 1) #98 (1991)',
        'characters':'Wade Winston'
    },
  
    {
        'id': 'marvel-venom',
        'superhero':'Venom', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Various Host',
        'first_appearance':'The Amazing Spider-Man #252',
        'characters':'Venom'
    },
    {
        'id': 'marvel-carnage',
        'superhero':'Carnage', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Cletus Kasady',
        'first_appearance':'The Amazing Spider-Man # 360',
        'characters':'Cletus Kasady'
    },
    {
        'id': 'marvel-thanos',
        'superhero':'Thanos', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Thanos The Titan',
        'first_appearance':'Iron Man Vol. 1, #55 (febrero de 1973)',
        'characters':'Thanos'
    },
    {
        'id': 'marvel-quicksilver',
        'superhero':'Quicksilver', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Pietro Maximoff',
        'first_appearance':' X-Men Nº 4 (marzo de 1964)',
        'characters':'Pietro Maximoff'
    },
    {
        'id': 'marvel-x23',
        'superhero':'X23', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Laura Kinney',
        'first_appearance':'NYX #3 de 2004',
        'characters':'Laura Kinney'
    },
    {
        'id': 'marvel-phoenix',
        'superhero':'Phoenix', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Jean Elaine Grey Summers',
        'first_appearance':'Uncanny X-Men #1 (1963)',
        'characters':'Phoenix'
    },
    {
        'id': 'marvel-ronin',
        'superhero':'Ronin', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Echo, Red Guard, HawkEye',
        'first_appearance':'Los Nuevos Vengadores #11noviembre de 2005',
        'characters':'Echo, Red Guard, HawkEye'
    },
    {
        'id': 'marvel-magneto',
        'superhero':'Magneto', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Max Eisenhardt, Erik Lehnsherr',
        'first_appearance':'Uncanny X-Men vol. 1 # 1 (septiembre de 1963)',
        'characters':'Max Eisenhardt, Erik Lehnsherr'
    },
    {
        'id': 'marvel-ScarletWitch',
        'superhero':'Scarlet Witch', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Wanda Maximoff',
        'first_appearance':' X-Men #4 (1964)',
        'characters':'Wanda Maximoff'
    },
    {
        'id': 'marvel-miles',
        'superhero':'Miles Morales', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Miles Morales',
        'first_appearance':'Ultimate Fallout #1, (2011)',
        'characters':'Miles Morales'
    },
    {
        'id': 'marvel-gambit',
        'superhero':'Gambit', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Remy Etienne LeBeau',
        'first_appearance':'Uncanny X-Men #266 (agosto de 1990); Marvel Comics',
        'characters':'Remy Etienne LeBeau'
    },
    
   
]

//Order by superhero name
heroes.sort( ( a, b ) => {

    const nameA = a.superhero.toLocaleLowerCase(), 
    nameB = b.superhero.toLocaleLowerCase();

    if ( nameA > nameB ) return 1;

    if( nameA < nameB ) return -1;

    return 0
});


 export default heroes;