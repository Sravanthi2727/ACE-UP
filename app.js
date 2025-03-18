const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const { v4: uuidv4 } = require("uuid");

const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Listening to port ", port);
});

let games = [
  {
    id: "1",
    name: "Valorant",
    rating: "✭ ✭ ✭ ✭ ⯨ 4.5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "2",
    name: "FS 25",
    rating: "✭ ✭ ✭ ✭ 4",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "3",
    name: "COD MW 3",
    rating: "✭ ✭ ✭ ✭ ⯨ 4.5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "4",
    name: "PUBG",
    rating: "✭ ✭ ✭ ✭ ⯨ 4.5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "5",
    name: "Gran Turismo",
    rating: "✭ ✭ ✭ ✭ ✭ 5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "5",
    name: "Assasian creed Vallhala",
    rating: "✭ ✭ ✭ ✭ 4",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "6",
    name: "Dead By Daylight",
    rating: "✭ ✭ ✭ 3",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "7",
    name: "FC 25",
    rating: "✭ ✭ ✭ ✭ ✭ 5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "8",
    name: " COD Warzone",
    rating: "✭ ✭ ✭ ⯨ 3.5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "9",
    name: "Fortnite",
    rating: "✭ ✭ ✭ ✭ 4",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "10",
    name: "Warewolf: The Apocolypse",
    rating: "✭ ✭ 2",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "11",
    name: " Hitman 3",
    rating: "✭ ✭ ✭ ✭ ⯨ 4.5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
  {
    id: "12",
    name: "Elden Ring",
    rating: "✭ ✭ ✭ ✭ ✭ 5",
    des: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork",
    genere: "FPS, Stratergy",
    feat: "Multiplayer\n Competitive \n Tactical Shooter \nUnique Agents with Abilities",
    dia: ' 🎯 "DEFY THE LIMITS FOR FREE IN VALORANT"',
    largeDesB1: ">FIGHT AROUND THE WORLD",
    largeDesP1:
      "Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per round, you'll have to think faster than your opponent if you want to survive.",
    largeDesB2: "CREATIVITY IS YOUR GREATEST WEAPON",
    largeDesP2:
      "More than guns and bullets, you will choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
    dev: "Riot Games",
    min: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    rec: "Windows 10 (64-bit, Version 2004 / Build 19041 or higher)",
    proc: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    recD: "Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)",
    minRam: "RAM 4GB",
    recRam: "RAM 4GB",
    mingraph: "Intel HD 4000 or AMD Radeon R5 200 with 1 GB VRAM",
    recGraph: "NVIDIA GTX 1050 Ti / AMD Radeon R7 370",
  },
];
app.get("/", (req, res) => {
  //res.send("Serving working well");
  res.render("index.ejs", { games });
});

app.get("/:id", (req, res) => {
  let { id } = req.params;

  console.log("Requested ID:", id); // Check what ID is received
  console.log(
    "Available Games:",
    games.map((g) => g.id)
  ); // Print all game IDs
  let game = games.find((p) => id === p.id);
  console.log(game);
  if (!game) {
    console.log("Game not found for ID:", id);
    return res.status(404).send("Game not found");
  }

  console.log("Found game:", game);
  res.render("game.ejs", { game });
});
