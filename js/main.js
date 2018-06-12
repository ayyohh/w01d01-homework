//Difference between interpolation and concatenation,
//concatenation would be adding strings together:
//console.log("Myrna is " + "100" + " years old");
// vs interpolation
// let a = 20;
// console.log("Myrna is " + a^5 + " years old");


//DRY stands for Don't Repeat Yourself meaning in programming
//you shouldn't code anything more than you need to otherwise you
//are taking up memory, functions are a way to write reusable code
//taking up less memory
//
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
//
// console.log(a < b);
// console.log(c > d);
// console.log('name' == 'name');
// console.log(a < b < c);
// console.log(a != a < d);
// console.log(e == 'Kevin');
// console.log(48 == '48');

//first one will be an infintie loop since it will always be true
//second is not an infinte loop, runProgram = false will end the loop

//honestly don't think anything will happen at all
// let letters = "A";
// let i = 0;
//
// while (i < 20) {
// 	letters += "A";
// 	i++;
// }
//
// console.log(letters);

//21 A's



//while loops perform the loop as long as the conditions are being met
//for loops run the loop for a predetermined amount of times while being able
//to set incremnates for each iteration

// for (let i=0; i < 1000; i++) {
//   console.log(i);
// }

//could not find what the three components

// for (let i=999; i>=0; i--) {
//   console.log(i);
// }


// for (let i = 1; i <=t 10; i++) {
//   console.log('The value of i is : ' + i + ' of 10');
// }



// Alexs-MacBook-Pro:june11-cli fuckyobitch$ mkdir homework_part2
// Alexs-MacBook-Pro:june11-cli fuckyobitch$ ls
// file_Structure_helloWorld	homework_part2
// homework			labyrinth
// Alexs-MacBook-Pro:june11-cli fuckyobitch$ cd homework_part2/
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ mkdir death_star
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ touch darth_vader.txt princess_leia.txt storm_trooper.txt
// Alexs-MacBook-Pro:death_star fuckyobitch$ ls
// darth_vader.txt		princess_leia.txt	storm_trooper.txt
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ mkdir galaxy_farfar_away
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ cd galaxy_farfar_away/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ mkdir tatooine
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd tatooine/
// Alexs-MacBook-Pro:tatooine fuckyobitch$ touch luke.txt ben_kenobi.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ mkdir millenium_falcon
// Alexs-MacBook-Pro:tatooine fuckyobitch$ cd millenium_falcon/
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ touch han_solo.txt chewie.txt
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ cd ../tatooine
// -bash: cd: ../tatooine: No such file or directory
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ cd ../
// Alexs-MacBook-Pro:tatooine fuckyobitch$ ls
// ben_kenobi.txt		luke.txt		millenium_falcon
// Alexs-MacBook-Pro:tatooine fuckyobitch$ mv ben_kenobi.txt obi_wan.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ ls
// luke.txt		millenium_falcon	obi_wan.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// └── tatooine
//     ├── luke.txt
//     ├── millenium_falcon
//     │   ├── chewie.txt
//     │   └── han_solo.txt
//     └── obi_wan.txt
//
// 2 directories, 4 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd ../
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ ls
// death_star		galaxy_farfar_away
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ mv -lf death_star galaxy_farfar_away/
// mv: illegal option -- l
// usage: mv [-f | -i | -n] [-v] source target
//        mv [-f | -i | -n] [-v] source ... directory
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ mv death_star galaxy_farfar_away/
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ ls
// galaxy_farfar_away
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ tree
// .
// └── galaxy_farfar_away
//     ├── death_star
//     │   ├── darth_vader.txt
//     │   ├── princess_leia.txt
//     │   └── storm_trooper.txt
//     └── tatooine
//         ├── luke.txt
//         ├── millenium_falcon
//         │   ├── chewie.txt
//         │   └── han_solo.txt
//         └── obi_wan.txt
//
// 4 directories, 7 files
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ cp /galaxy_farfar_away/death_star/storm_trooper.txt ../tatooine
// cp: /galaxy_farfar_away/death_star/storm_trooper.txt: No such file or directory
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ ls
// galaxy_farfar_away
// Alexs-MacBook-Pro:homework_part2 fuckyobitch$ cd galaxy_farfar_away/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ ls
// death_star	tatooine
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ ls
// darth_vader.txt		princess_leia.txt	storm_trooper.txt
// Alexs-MacBook-Pro:death_star fuckyobitch$ cp storm_trooper.txt ../tatooine
// Alexs-MacBook-Pro:death_star fuckyobitch$ ls
// darth_vader.txt		princess_leia.txt	storm_trooper.txt
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   ├── princess_leia.txt
// │   └── storm_trooper.txt
// └── tatooine
//     ├── luke.txt
//     ├── millenium_falcon
//     │   ├── chewie.txt
//     │   └── han_solo.txt
//     ├── obi_wan.txt
//     └── storm_trooper.txt
//
// 3 directories, 8 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd /tatooine
// -bash: cd: /tatooine: No such file or directory
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd tatooine
// Alexs-MacBook-Pro:tatooine fuckyobitch$ ls
// luke.txt		obi_wan.txt
// millenium_falcon	storm_trooper.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ mv luke.txt millenium_falcon/
// Alexs-MacBook-Pro:tatooine fuckyobitch$ mv obi_wan.txt millenium_falcon/
// Alexs-MacBook-Pro:tatooine fuckyobitch$ ls
// millenium_falcon	storm_trooper.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ mv millenium_falcon/ ../
// Alexs-MacBook-Pro:tatooine fuckyobitch$ ls
// storm_trooper.txt
// Alexs-MacBook-Pro:tatooine fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ ls
// death_star		millenium_falcon	tatooine
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   ├── princess_leia.txt
// │   └── storm_trooper.txt
// ├── millenium_falcon
// │   ├── chewie.txt
// │   ├── han_solo.txt
// │   ├── luke.txt
// │   └── obi_wan.txt
// └── tatooine
//     └── storm_trooper.txt
//
// 3 directories, 8 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ mv millenium_falcon/ death_star/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ ls
// death_star	tatooine
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv princess_leia.txt millenium_falcon/
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   ├── millenium_falcon
// │   │   ├── chewie.txt
// │   │   ├── han_solo.txt
// │   │   ├── luke.txt
// │   │   ├── obi_wan.txt
// │   │   └── princess_leia.txt
// │   └── storm_trooper.txt
// └── tatooine
//     └── storm_trooper.txt
//
// 3 directories, 8 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd millenium_falcon/
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ rm obi_wan.txt
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ cd ../
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   ├── millenium_falcon
// │   │   ├── chewie.txt
// │   │   ├── han_solo.txt
// │   │   ├── luke.txt
// │   │   └── princess_leia.txt
// │   └── storm_trooper.txt
// └── tatooine
//     └── storm_trooper.txt
//
// 3 directories, 7 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ mkdir yavin_4
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv millenium_falcon/ ../yavin_4/
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   └── storm_trooper.txt
// ├── tatooine
// │   └── storm_trooper.txt
// └── yavin_4
//     └── millenium_falcon
//         ├── chewie.txt
//         ├── han_solo.txt
//         ├── luke.txt
//         └── princess_leia.txt
//

// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd yavin_4/
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ mkdir x_wing
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ cd mil
// -bash: cd: mil: No such file or directory
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ pwd
// /Users/fuckyobitch/ga-wdi/june11-cli/homework_part2/galaxy_farfar_away/yavin_4
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ tree
// .
// ├── millenium_falcon
// │   ├── chewie.txt
// │   ├── han_solo.txt
// │   ├── luke.txt
// │   └── princess_leia.txt
// └── x_wing
//
// 2 directories, 4 files
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ cd millenium_falcon/
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ mv princess_leia.txt ../
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ ls
// chewie.txt	han_solo.txt	luke.txt
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ mv luke.txt ../x_wing/
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ ls
// chewie.txt	han_solo.txt
// Alexs-MacBook-Pro:millenium_falcon fuckyobitch$ cd ../
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ mv millenium_falcon/ ../
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ mv x_wing/ ../
// Alexs-MacBook-Pro:yavin_4 fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   ├── darth_vader.txt
// │   └── storm_trooper.txt
// ├── millenium_falcon
// │   ├── chewie.txt
// │   └── han_solo.txt
// ├── tatooine
// │   └── storm_trooper.txt
// ├── x_wing
// │   └── luke.txt
// └── yavin_4
//     └── princess_leia.txt
//
// 5 directories, 7 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd death_star/
// Alexs-MacBook-Pro:death_star fuckyobitch$ mkdir tie_fighter1 tie_fighter2 tie_fighter3
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv darth_vader.txt tie_fighter3
// Alexs-MacBook-Pro:death_star fuckyobitch$ ls
// storm_trooper.txt	tie_fighter2
// tie_fighter1		tie_fighter3
// Alexs-MacBook-Pro:death_star fuckyobitch$ cp storm_trooper.txt tie_fighter2
// Alexs-MacBook-Pro:death_star fuckyobitch$ cp storm_trooper.txt tie_fighter3
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd tie_fighter3
// Alexs-MacBook-Pro:tie_fighter3 fuckyobitch$ mv darth_vader.txt ../tie_fighter1
// Alexs-MacBook-Pro:tie_fighter3 fuckyobitch$ cd ../
// Alexs-MacBook-Pro:death_star fuckyobitch$ ls
// storm_trooper.txt	tie_fighter2
// tie_fighter1		tie_fighter3
// Alexs-MacBook-Pro:death_star fuckyobitch$ tree
// .
// ├── storm_trooper.txt
// ├── tie_fighter1
// │   └── darth_vader.txt
// ├── tie_fighter2
// │   └── storm_trooper.txt
// └── tie_fighter3
//     └── storm_trooper.txt
//
// 3 directories, 4 files
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv tie_fighter1 ../
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv tie_fighter2 ../
// Alexs-MacBook-Pro:death_star fuckyobitch$ mv tie_fighter3/ ../
// Alexs-MacBook-Pro:death_star fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── death_star
// │   └── storm_trooper.txt
// ├── millenium_falcon
// │   ├── chewie.txt
// │   └── han_solo.txt
// ├── tatooine
// │   └── storm_trooper.txt
// ├── tie_fighter1
// │   └── darth_vader.txt
// ├── tie_fighter2
// │   └── storm_trooper.txt
// ├── tie_fighter3
// │   └── storm_trooper.txt
// ├── x_wing
// │   └── luke.txt
// └── yavin_4
//     └── princess_leia.txt
//
// 8 directories, 9 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ rm -r tie_fighter2
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ rm -r tie_fighter3
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ cd x_wing/
// Alexs-MacBook-Pro:x_wing fuckyobitch$ touch the_force.txt
// Alexs-MacBook-Pro:x_wing fuckyobitch$ cd ../
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ rm -r death_star/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ ls
// millenium_falcon	tie_fighter1		yavin_4
// tatooine		x_wing
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ mv x_wing/ yavin_4/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ mv millenium_falcon/ yavin_4/
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$ tree
// .
// ├── tatooine
// │   └── storm_trooper.txt
// ├── tie_fighter1
// │   └── darth_vader.txt
// └── yavin_4
//     ├── millenium_falcon
//     │   ├── chewie.txt
//     │   └── han_solo.txt
//     ├── princess_leia.txt
//     └── x_wing
//         ├── luke.txt
//         └── the_force.txt
//
// 5 directories, 7 files
// Alexs-MacBook-Pro:galaxy_farfar_away fuckyobitch$
