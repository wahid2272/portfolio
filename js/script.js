const  mycv = () => {
  const menu = document.getElementById('cv');
  menu.appendChild(document.createElement('a'));
  menu.id = 'anchor-id';
  menu.setAttribute('href', 'asset/pdf/resume.pdf');
  menu.setAttribute('download', 'cv_wahid.pdf')
}