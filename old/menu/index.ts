import { generateMenu } from './menu';
import { list } from './menu/data';

// declare function $(selector: string): any;

$('.menu')
    .html(generateMenu(list))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement
        if (!el.classList.contains('title')) {
            return;
        }
        const parenLi: HTMLLIElement = el.parentElement as HTMLLIElement;
        parenLi.classList.toggle('menu-open');
    })
// const menuNav: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// menuNav.innerHTML = generateMenu(list);
// menuNav.addEventListener('click', (event: MouseEvent) => {
//     const el: HTMLElement = event.target as HTMLElement
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parenLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parenLi.classList.toggle('menu-open');
// })
