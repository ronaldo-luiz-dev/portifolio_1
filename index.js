const url = 'https://api.github.com/users/Ronaldo-Oliveira99/repos'

 fetch(url).then(function (response) {
	// The API call was successful!
	    return response.json();
    }).then(function (data) {

        // This is the JSON from our response
        console.log('lenght',data.length)
        var repos = data.length;
        var i=1;
        var val="";

        function limitText(limitField, limitNum) {
            if (limitField.length > limitNum) {
                return limitField_p = limitField.substring(0, limitNum) + ' ...';
            } 
        }


        while(i<=repos )
        {
    
            
            if(!document.getElementById('timedrpact'+i) && data[i].homepage != null  && data[i].fork == false)
            {
                var div = document.createElement("div");
                var div_title = document.createElement("div");
                var div_description = document.createElement("div");
                var div_info = document.createElement("div");

                var div_star = document.createElement("div");
                var div_fork = document.createElement("div");
                var div_language = document.createElement("div");
                var div_star_fork = document.createElement("div");

                var titulo = document.createElement("h1");
                var description = document.createElement("p");

                var star_span = document.createElement("span");
                var language_span = document.createElement("span");
                var fork_span = document.createElement("span");
                
                var icon_folder = document.createElement("img");
                var icon_star = document.createElement("img");
                var icon_fork = document.createElement("img");
                var repo_link = document.createElement("a");

                //div principal
                div.setAttribute("id","timedrpact"+i);
                div.setAttribute("class","box_repo");

                //div secudarias
                div_title.setAttribute("class","div_title");
                div_description.setAttribute("class","div_description");
                div_info.setAttribute("class","div_info");

                //div info - star/fork/linguagem
                div_star.setAttribute("class","star");
                div_fork.setAttribute("class","fork");
                div_language.setAttribute("class","language");
                div_star_fork.setAttribute("class","star_fork");

                //tag de imagens
                icon_folder.setAttribute("src","./assets/folder.svg");
                icon_folder.setAttribute("alt","pasta");
                icon_star.setAttribute("src","./assets/star.svg");
                icon_star.setAttribute("alt","star");
                icon_fork.setAttribute("src","./assets/git-branch.svg");
                icon_fork.setAttribute("alt","star");

                //tag para links do git
                repo_link.setAttribute("href",data[i].html_url);
                repo_link.setAttribute("target","_blank");
                repo_link.setAttribute("id","link"+i);

                //div parents
                output.appendChild(repo_link);
                repo_link.appendChild(div);
                div.appendChild(div_title);
                div.appendChild(div_description);
                div.appendChild(div_info);
                


                //div titulo
                div_title.appendChild(icon_folder);
                div_title.appendChild(titulo);
                
                //div description
                div_description.appendChild(description);

                //div info
                div_star_fork.appendChild(div_star);
                div_star_fork.appendChild(div_fork);
                div_info.appendChild(div_star_fork); 
                div_info.appendChild(div_language);

                //div star -> span/img
                div_star.appendChild(icon_star);
                div_star.appendChild(star_span);

                //div fork -> span/img
                div_fork.appendChild(icon_fork);
                div_fork.appendChild(fork_span);

                 //div language -> span/img
                 div_language.appendChild(language_span);
                 //div_fork.appendChild(fork_span);


                titulo.innerHTML=data[i].name;
                description.innerHTML= limitText(data[i].description,70);
                star_span.innerHTML=data[i].stargazers_count;
                language_span.innerHTML=data[i].language;
                fork_span.innerHTML=data[i].forks;

            }
            i++;


        }



        // const title_git = data[0].name
        // const title = document.getElementById("teste")
        // title.innerHTML = title_git;





    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


// const title = document.getElementById("teste")
// title.innerHTML = title;
// //alert(title[0].nodeName);
//  console.log('title',title);




 const para = document.createElement("p");
 const node = document.createTextNode("This is new.");
 para.appendChild(node);
 
 const element = document.getElementById("div1");
 element.appendChild(para);

// const button = document.querySelector('#openModal');

//     button.addEventListener('click', onChangeButton)
//     button.addEventListener("keydown",onChangeButtonEsc) 


//     function onChangeButtonEsc(event){
//         console.log('event1')
//         if (event.key ==="Escape") {
//         // Realiza uma ação, talvez até a operação de 'desfazer'
//         const takeOff = document.querySelector('.modal-wrapper')
//         takeOff.classList.add('invisible');
//         console.log('event')
//         }
//     }

//     function onChangeButton(){
//         const takeOff = document.querySelector('.modal-wrapper');
//         takeOff.classList.remove('invisible');
        
//     }
