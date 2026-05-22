import {SlideIn} from '@/components/animations/slide-in';
import LoginComponent from '@/components/LogIn';

export default function LoginPage() {
    return (
        <SlideIn direction='right'>
            <LoginComponent />
        </SlideIn>
    )
}