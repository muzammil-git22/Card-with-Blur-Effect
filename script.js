
// let user = [
//     {
//         name:"amisha rethore",
//         pic:"https://images.unsplash.com/photo-1754206352604-0a4f13ca2a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
//         bio:"Silent chaos in a loud world not for everyone"
//     },
  
//     {
//         name: "Karan Mehta",
//         pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
//         bio: "Dream big, hustle harder."
//     },
//     {
//         name: "Zoya Ali",
//         pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
//         bio: "Wanderer. Dreamer. Believer."
//     },
//     {
//         name: "Ayaan Khan",
//         pic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60",
//         bio: "Live fast, stay humble."
//     },
  
//     {
//         name: "Simran Kapoor",
//         pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60",
//         bio: "Just a girl building her empire."
//     }
// ];

// function showUser(arr) {
//     arr.forEach(function(user) {
//         // Card element
//         const card = document.createElement("div");
//         card.classList.add("card");

//         // Image
//         const img = document.createElement("img");
//         img.src = user.pic;
//         img.classList.add("bg-img");

//         // Blurred layer
//         const blurLayer = document.createElement("div");
//         blurLayer.style.backgroundImage =`url(${user.pic})` ;
//         blurLayer.classList.add("blurred-layer");

//         // Content div
//         const content = document.createElement("div");
//         content.classList.add("content");

//         // Heading
//         const h3 = document.createElement("h3");
//         h3.textContent = user.name;

//         // Paragraph
//         const p = document.createElement("p");
//         p.textContent = user.bio;

//         // Append heading and paragraph to content
//         content.appendChild(h3);
//         content.appendChild(p);

//         // Append all to card
//         card.appendChild(img);
//         card.appendChild(blurLayer);
//         card.appendChild(content);

//         // Add card to body
//         document.querySelector(".cards").appendChild(card);
//     });
// }
// showUser(user);
// let inp = document.querySelector(".inp");

// inp.addEventListener("input",function(){
//     let CreateValue = inp.value.trim()
//     let createCards = document.querySelector(".cards");
//     createCards.innerHTML = "";

//     if(CreateValue === ""){
//         showUser(user)
//         return
//     }

//    let Uservalue = user.filter(function(users){
//      return users.name.startsWith(CreateValue)
//    });
//    if(Uservalue.length === 0){
//     let p = document.createElement("p");
//     p.textContent = "user not found"
//     p.classList.add("not-found")
//     p.style.color = "white"
//     createCards.appendChild(p)
//    }else{
//    showUser(Uservalue)
//    }
// })