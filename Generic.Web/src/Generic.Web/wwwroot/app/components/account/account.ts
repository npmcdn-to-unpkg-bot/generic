import {Component} from '@angular/core'
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common'

@Component({
    selector: 'account',
    templateUrl: './app/components/account/account.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Account {
    constructor() {

    }
}