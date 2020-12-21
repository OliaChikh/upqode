const data = [
    {
        name: 'Nick Harrington',
        position: 'ART DIRECTOR',
        img: 'img/memberOfTeam1.png',
        description: 'Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.'
    },
    {
        name: 'Minnie Bell',
        position: 'ART DIRECTOR2',
        img: 'img/memberOfTeam2.png',
        description: 'Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.'
    },
    {
        name: 'Bill Smit',
        position: 'ART DIRECTOR3',
        img: 'img/memberOfTeam5.jpg',
        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'
    },
    {
        name: 'Lily Jons',
        position: 'ART DIRECTOR4',
        img: 'img/memberOfTeam7.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
    {
        name: 'Nicky Jons',
        position: 'ART DIRECTOR5',
        img: 'img/memberOfTeam8.png',
        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'
    },
    {
        name: 'Alex Smit',
        position: 'ART DIRECTOR6',
        img: 'img/memberOfTeam6.jpg',
        description: 'When we are feeling so low and deep in the pits, this is when we need light to see our way through.'
    }];

const nameOfMember = document.getElementById('nameOfMember');
const positionOfMember = document.getElementById('positionOfMember');
const descriptionOfMember = document.getElementById('descriptionOfMember');
const teamPhotoNext = document.getElementById('teamPhotoNext');
const teamPhotoPrev = document.getElementById('teamPhotoPrev');
const teamPhotoCurrent = document.getElementById('teamPhotoCurrent');
const nameTeamNext = document.getElementById('nameTeamNext');
const nameTeamPrev = document.getElementById('nameTeamPrev')

let memberIndex = 0;


function addIndex(n) {
    showMember(memberIndex += n);
}

function showMember(n) {

  if (n > data.length) {memberIndex = 0}
  if (n < 0) {memberIndex = data.length - 1}
  const member = data[memberIndex];
  const prevMember = (memberIndex - 1 > -1) ? data[memberIndex - 1] : data[data.length - 1];
  const nextMember = (memberIndex + 1 < data.length) ? data[memberIndex + 1] : data[0];
  nameOfMember.textContent = member.name;
  descriptionOfMember.textContent = member.description;
  positionOfMember.textContent = member.position;
  teamPhotoCurrent.src = member.img;
  teamPhotoNext.src = nextMember.img;
  teamPhotoPrev.src = prevMember.img;
  nameTeamNext.textContent = nextMember.name;
  nameTeamPrev.textContent = prevMember.name;
}
showMember(memberIndex);
window.addIndex = addIndex;
window.showMember = showMember;
module.exports = team;