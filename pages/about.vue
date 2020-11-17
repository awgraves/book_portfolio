<template>
  <div id="whole-about-page">
    <div class="homebtn-container">
        <home-btn/>
    </div>
    <div class="paper-wrapper">
         <div class="paper">
            <div class="paper__header">
                <h1>A Collection of Work(s)</h1>
                <h3>by Andrew Graves</h3>
            </div>
            <div class="paper__content">
                <div>
                    I completed these projects as a software engineer at the UPMC Molecular & Genomic Pathology Lab.
                </div>
                <div>
                    You can see some of my older personal projects 
                    <a href="https://awgraves.github.io" target="_blank">here</a>.
                </div>
                <div class="table-section">
                    <div><h4>Tools/Resources I Utilized to Create this Site:</h4></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://nuxtjs.org/" target="_blank"><img src="/logos/nuxt.png"/></a>
                                </td>
                                <td class="description">NuxtJS static site generator extension for the Vue.js framework</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://fontawesome.com/" target="_blank"><img src="/logos/fontawesome.jpeg"></a>
                                </td>
                                <td class="description">Fontawesome Icons</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://sfgov.org/scorecards/sites/default/files/Images/rotatedevice_0.gif" target="_blank"><img src="/images/rotate_device.gif"></a>
                                </td>
                                <td class="description">Rotate mobile device gif found on google images</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://firebase.com" target="_blank"><img src="/logos/firebase.jpeg"></a>
                                </td>
                                <td class="description">Google Firebase web hosting</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-section">
                    <div><h4>I'd also like to credit these sources that served as conceptual inspiration:</h4></div>
                    <ul>
                        <li>
                            <a href="https://tympanus.net/Development/3DBookShowcase/index.html" target="_blank">
                                3D Book Showcase
                            </a>
                        </li>
                        <li>
                            <a href="https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/" target="_blank">
                                Mouseover Perspective Rotation
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/diemoritat/pen/LKROYZ" target="_blank">
                                Flipping Book
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="btm-copyright" class="copyright copyright--rel">
      <small>
        2020 © Andrew Graves
      </small>
    </div>
  </div>
</template>

<script>
import HomeBtn from '~/components/Buttons/HomeBtn.vue';

export default {
  name: 'about',
  components: {'HomeBtn': HomeBtn},
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#whole-about-page {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

#btm-copyright {
    margin: 1em 0;
}

// fix home button on mobile devices
@media screen and (max-width: 450px) {
    .homebtn-container {
        width: 100%;
        text-align: right;
        padding: 2.5vmin;
        box-sizing: border-box;
        display: inline-block;
    }
    .homebtn {
        position: relative;
        top: unset;
        right: unset;
    }
}

.paper-wrapper {
    flex: 1;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.paper {
    padding: 1em 5%;
    width: 70%;
    max-width: 850px;
    min-height: 80vh;
    text-align: center;
    background-color: oldlace;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.3);
    box-sizing: border-box;
    z-index: 1;

    &__header {
        font-family: 'Special Elite', cursive;
        margin-bottom: 3em;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        font-family: 

        div {
            margin-bottom: 1em;
        }

        img {
            width: 50px;
        }

        a {
            white-space: nowrap;
        }

        .table-section {
            flex: 1;
            display: flex;
            max-width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h4 {
                margin-bottom: 1rem;
            }
            table {
                max-width: 80%;

                .description {
                    padding-left: 5%;
                    text-align: left;
                }
            }

            ul li {
                text-align: left;
            }

            li {
                margin-bottom: .5rem;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    // increase width for mobile
    .paper {
        width: 90%;
    }
}

</style>
