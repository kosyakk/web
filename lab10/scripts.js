var isLightOn = false;

function Initialization()
{
    document.getElementById('curtain').style.transition = '0.2s';   
    document.getElementById('light').style.transition = '0.2s';     
    document.getElementById('rabbit').style.transition = '0.5s';    
    document.getElementById('bird').style.transition = '0.5s';      
    document.getElementById('wizard').style.transition = '0.2s';   
    document.getElementById('hat').style.transition = '0.2s';       
}

function RaiseCurtain() 
{
    let curtain = document.getElementById('curtain');
    curtain.style.transition = '1s';
    curtain.style.marginTop = '-100vh';
}

function ReplaceAnimal(currentAnimal) 
{
    let bird = document.getElementById('bird');
    let rabbit = document.getElementById('rabbit');
    let upperPosition = '450px';
    let lowerPosition = '550px';
    bird.style.transition = rabbit.style.transition = '0.5s'


    if (currentAnimal == 'bird')
    {
        rabbit.style.top = upperPosition;
        bird.style.top = lowerPosition;
    }
    else if (currentAnimal == 'rabbit')
    {
        bird.style.top = upperPosition;
        rabbit.style.top = lowerPosition;
    }
    else
    {
        console.log("Некорректно задано имя животного");
    }
}

function LightOn() 
{
    let elements = new Array();
    elements[0] = document.getElementById('light');
    elements[1] = document.getElementById('rabbit');
    elements[2] = document.getElementById('hat');
    elements[3] = document.getElementById('bird');
    elements[4] = document.getElementById('wizard');

    if (isLightOn)     
    {
        elements[0].style.opacity = 0;

        for (let i = 1; i < 5; i++)
        {
            elements[i].style.opacity = 0;
            elements[i].style.transition = '0.2s'
        }

        isLightOn = false;
    }
    else               
    {
        elements[0].style.opacity = 0.5;

        for (let i = 1; i < 5; i++)
        {
            elements[i].style.opacity = 1;
            elements[i].style.transition = '0.2s'
        }

        isLightOn = true;
    }
}