<template>
    <aside>
      <div class="menu">
          <a class="button inactive" to="/">
              <span class="text">Vanguard</span>
          </a>
  
          <a class="button inactive" to="/about">
              <span class="text">Fidelity</span>
          </a>
  
          <a class="button active" to="/trade">
              <span class="text">Schwab</span>
          </a>
  
      </div>
    </aside>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  aside {
      display: flex;
      flex-direction: column;
      width: 150px;
      overflow:scroll;
      height: 100vh;
      color: var(--light);
      padding: 1rem;
      
      background-color: var(--grey);
      transition: 0.2s ease-out;
  
      h3, .button .text {
          opacity: 0;
          transition: 0.3s ease-out;
      }
      .menu {
          margin: 0 -1rem;
          .button {
              display: flex;
              align-items: center;
              text-decoration: none;
  
              padding: 0.5rem 1rem;
              transition: 0.2s ease-out;
  
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              .text {
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover {
                  background-color: var(--dark-alt);
  
                  .material-icons, .text {
                      color: var(--primary);
                  }
              }
              &.active {
                  border-right: 5px solid var(--primary);
              }
              &.inactive {
                border-right: 5px solid var(--negative);
              }
          }
      }
      h3, .button .text {
          opacity: 1;
      }
      .button {
          .material-icons {
              margin-right: 1rem;
          }
      }
  
  }
  </style>