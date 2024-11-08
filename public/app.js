const bar = document.querySelector("#bar")
const menu = document.querySelector("#mobile-menu")
let isOpen = false
bar.addEventListener("click", function () {
  if (!isOpen) {
    menu.classList.add("right-1")
    menu.classList.remove("-right-16", "opacity-0")
    bar.innerHTML = ""
    bar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 cursor-pointer">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
`
    isOpen = true
  } else if (isOpen) {
    menu.classList.remove("right-1")
    menu.classList.add("-right-16", "opacity-0")

    bar.innerHTML = ""
    bar.innerHTML = ` <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 cursor-pointer"
          id="bar"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>`
    isOpen = false
  }
})
