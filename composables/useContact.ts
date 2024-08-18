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
        // User is on the home page, scroll to contact
        scrollToSection()
      } else {
        // User is not on the home page, navigate to home then scroll
        // router.push('/#contact')
        navigateTo('/#contact')
      }
}