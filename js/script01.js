let cursor = document.querySelector('.cursor');



window.onmousemove = (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

document.querySelectorAll('.navbar a').forEach(link =>{
    link.onmouseenter = () =>{
        document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
    }
})