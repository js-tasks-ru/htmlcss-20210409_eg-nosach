function switchNavTabs() {
  const tabItems = document.querySelectorAll('.js-tabs-item');
  const tabContents = document.querySelectorAll('.js-tabs-content');
  const activeContentClass = 'active'
  const activeTabItemClass = 'tabs__item--active'

  const removeClass = (list, className) => {
    list.forEach(el => {
      el.classList.remove(className)
    })
  }

  tabContents[0].classList.add(activeContentClass)

  tabItems.forEach((tab, tabIndex)=> {
    tab.addEventListener('click', () => {
      removeClass(tabContents, activeContentClass);
      removeClass(tabItems, activeTabItemClass);
      tabContents[tabIndex].classList.add(activeContentClass);
      tabItems[tabIndex].classList.add(activeTabItemClass);
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  switchNavTabs()
});