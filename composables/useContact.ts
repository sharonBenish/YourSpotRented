import { } from '#vue-router'

const route =  useRoute()
const router = useRouter()

const scrollToSection = () => {
    console.log('aaa')
    const section = document.getElementById('contact');
    console.log(section)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

export async function goToContact(){
    if (route.path === '/') {
        scrollToSection()
      } else {
        navigateTo('/#contact')
      }
}