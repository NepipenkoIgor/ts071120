import { generateMenu } from './menu';
import { list } from './menu/data';

const menuNav: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
menuNav.innerHTML = generateMenu(list);
menuNav.addEventListener('click', (event: MouseEvent) => {
    const el: HTMLElement = event.target as HTMLElement
    if (!el.classList.contains('title')) {
        return;
    }
    const parenLi: HTMLLIElement = el.parentElement as HTMLLIElement;
    parenLi.classList.toggle('menu-open');
})
