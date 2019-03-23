import { NgModule } from '@angular/core';
import { AlLoginComponent } from '../al-login/al-login.component';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login";


// Configs 
export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider("")
            }
        ]
    );
    return config;
}

@NgModule({
    declarations: [
        AlLoginComponent
    ],
    imports: [
        SocialLoginModule
    ],
    exports: [
        AlLoginComponent
    ],
    providers: [{ provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }],
    bootstrap: []
})
export class LoginModule { }
