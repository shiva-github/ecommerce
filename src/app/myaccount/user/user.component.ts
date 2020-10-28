import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';



@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
	userSettings:FormGroup;
	hideEdit:Boolean;
	cardList: Array<Card>;
	constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }
	address: Array<Address>;
	public demo1TabIndex = 1;
	ngOnInit(): void {
		this.hideEdit = false;
		this.userSettings = this.formBuilder.group({
			email: [{value: 'shiva.shirbhate@email.com', disabled: true}, [Validators.required,]],
			fname: [{value: 'Shiva', disabled: true}, [Validators.required]],
			lname: [{value: 'Shirbhate', disabled: true}, [Validators.required]],
			mobile: [{value: '9405349099', disabled: true}, [Validators.required]],
			password: [{value: '', disabled: true}, [Validators.required]],
			cpassword: [{value: '', disabled: true}, [Validators.required]],
		});
		this.cardList = [];
		this.address = [
			// new Address(1),
			// new Address(2),
			// new Address(3),
			// new Address(4),
			// new Address(5),
		]; 
		
	}

	openDialog(selectedAddr) {
		let addrObj;

		if(selectedAddr == null) {
			addrObj =	{
				data: {
					address: null,
					action: 'Add New Address'
				}
			}
		} else {
			addrObj = {
				data: {
					address: selectedAddr,
					action: 'Edit Address' 
				}
			}
		}
		const dialogRef = this.dialog.open(AddressDialog, addrObj);

		dialogRef.afterClosed().subscribe(result => {
			//  if updated Address
			console.log('The dialog was closed', result);
			// selectedAddr = <Address>result;
			
			// if added new Address
			// console.log(, result.length, result);
			if(typeof result != 'string') {
				this.address.push(<Address>result);
			}
		  });
	}
	saveUserSettings(): void {
		
		if (!this.userSettings.valid) {
			return;
		}
		return;
	}
	submitUser() {
		return false;
	}
	deleteDialog(col, delName) {
		let ActionName = '';
		if(delName == 'Address') {
			ActionName = 'Delete Address Confirmation';
		} else {
			if(delName == 'Card') {
				ActionName = 'Delete Card Confirmation';
			} else {
				return;
			}
		}
		const dialogRef = this.dialog.open(DeleteDialog, {
			data: {
				action: ActionName,
				data: col,
				name: delName,
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed', result);
		  });
	}
	CardAddEdit(CardData) {
		let cardObj;

		if(CardData == null) {
			cardObj =	{
				data: {
					address: null,
					action: 'Add New Card' 
				}
			}
		} else {
			cardObj = {
				data: {
					address: CardData,
					action: 'Edit Card' 
				}
			}
		}
		const dialogRef = this.dialog.open(CardDialog, cardObj);

		dialogRef.afterClosed().subscribe(result => {
			//  if updated Address
			console.log('The dialog was closed', result);
			// selectedAddr = <Address>result;
			
			// if added new Address
			// console.log(, result.length, result);
			if(typeof result != 'string') {
				this.cardList.push(<Card>result);
			}
		  });
	}
}
class Card {
	cno: string;
	id: number;
	action: string;
	constructor() {
		this.cno = ''; 
		this.id = 1;
		this.action = 'Add'; 
	}
}
class Address {
	type: String;
	firstname: String;
	lastname: String;
	addrLine1: String;
	addrLine2: String;
	date: String;
	distict: String;
	state: String;
	pin: String;
	// edit: boolean;
	saveClose: boolean;
	id: number;
	constructor(id: number) {
		this.type = 'Type_Default';
		this.id = id;
		this.firstname = 'FirstName_Default';
		this.lastname = 'LastName_Default';
		this.addrLine1 = 'Addr1_Default';
		this.addrLine2 = 'Addr2_Default';
		this.date = 'Date_Default';
		this.distict = 'Dist_Default';
		this.state = 'State_Default';
		this.pin = 'Pin_Default';
	}
}

// Address Add / Edit Dialog
@Component({
	selector: 'addEditAddress',
	templateUrl: './dialog-address.html',
})
export class AddressDialog {
	col: Address;
	// addressObj: any;
	modalTitle: String;
	addrForm:FormGroup;
	addrLine1: string;

	constructor(public dialogRef: MatDialogRef<AddressDialog>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public addressObj: any) {
		// this.addressObj = data;
		// this.addressObj.address = new Address(1000);
		// console.log(this.addressObj.address);
		if(this.addressObj.address == null) {
			this.addressObj.address = new Address(null);
		}
		this.addrForm = this.formBuilder.group({
			'firstname': [this.addressObj.address.firstname, [Validators.required,]],
			'lastname': [this.addressObj.address.lastname, [Validators.required,]],
			'addrLine1': [this.addressObj.address.addrLine1, [Validators.required,]],
			'addrLine2': [this.addressObj.address.addrLine2, [Validators.required,]],
			'distict': [this.addressObj.address.distict, [Validators.required,]],
			'state': [this.addressObj.address.state, [Validators.required,]],
			'pin': [this.addressObj.address.pin, [Validators.required,]],
			'type': [this.addressObj.address.type, [Validators.required,]],
		});
	}
	submit() {
		// console.log(this.addrForm);
		if (!this.addrForm.valid) {
			return;
		}
		// this.data.address = this.addrForm.value;
		console.log('Submit values below');
		console.log(this.addrForm.value);
		
		this.dialogRef.close(this.addrForm.value);
	}
	
}

// Delete confirmation dialog
@Component({
	selector: 'confirm-dialog',
	templateUrl: 'confirm-dialog.html',
  })
  export class DeleteDialog {
  
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  }





  // Card Add / Edit Dialog
@Component({
	selector: 'addEditCard',
	templateUrl: './dialog-card.html',
})
export class CardDialog {
	col: Address;
	// addressObj: any;
	modalTitle: String;
	addrForm:FormGroup;
	addrLine1: string;

	constructor(public dialogRef: MatDialogRef<AddressDialog>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public cardObject: Card) {
		// this.addressObj = data;
		// this.addressObj.address = new Address(1000);
		// console.log(this.addressObj.address);
		if(this.cardObject.id == null) {
			this.cardObject = new Card();
		}
		this.addrForm = this.formBuilder.group({
			'firstname': [this.cardObject.cno, [Validators.required,]],
		});
	}
	submit() {
		// console.log(this.addrForm);
		if (!this.addrForm.valid) {
			return;
		}
		// this.data.address = this.addrForm.value;
		console.log('Submit values below');
		console.log(this.addrForm.value);
		
		this.dialogRef.close(this.addrForm.value);
	}
	
}