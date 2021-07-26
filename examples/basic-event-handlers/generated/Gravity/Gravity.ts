// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "dlt-graph-ts";

export class NewGravatar extends EthereumEvent {
  get params(): NewGravatar__Params {
    return new NewGravatar__Params(this);
  }
}

export class NewGravatar__Params {
  _event: NewGravatar;

  constructor(event: NewGravatar) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get displayName(): string {
    return this._event.parameters[2].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class UpdatedGravatar extends EthereumEvent {
  get params(): UpdatedGravatar__Params {
    return new UpdatedGravatar__Params(this);
  }
}

export class UpdatedGravatar__Params {
  _event: UpdatedGravatar;

  constructor(event: UpdatedGravatar) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get displayName(): string {
    return this._event.parameters[2].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Gravity__getGravatarResult {
  value0: string;
  value1: string;

  constructor(value0: string, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromString(this.value0));
    map.set("value1", EthereumValue.fromString(this.value1));
    return map;
  }
}

export class Gravity__gravatarsResult {
  value0: Address;
  value1: string;
  value2: string;

  constructor(value0: Address, value1: string, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromString(this.value1));
    map.set("value2", EthereumValue.fromString(this.value2));
    return map;
  }
}

export class Gravity extends SmartContract {
  static bind(address: Address): Gravity {
    return new Gravity("Gravity", address);
  }

  getGravatar(owner: Address): Gravity__getGravatarResult {
    let result = super.call("getGravatar", [EthereumValue.fromAddress(owner)]);

    return new Gravity__getGravatarResult(
      result[0].toString(),
      result[1].toString()
    );
  }

  try_getGravatar(owner: Address): CallResult<Gravity__getGravatarResult> {
    let result = super.tryCall("getGravatar", [
      EthereumValue.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Gravity__getGravatarResult(value[0].toString(), value[1].toString())
    );
  }

  gravatarToOwner(param0: BigInt): Address {
    let result = super.call("gravatarToOwner", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_gravatarToOwner(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("gravatarToOwner", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  ownerToGravatar(param0: Address): BigInt {
    let result = super.call("ownerToGravatar", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_ownerToGravatar(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("ownerToGravatar", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  gravatars(param0: BigInt): Gravity__gravatarsResult {
    let result = super.call("gravatars", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Gravity__gravatarsResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString()
    );
  }

  try_gravatars(param0: BigInt): CallResult<Gravity__gravatarsResult> {
    let result = super.tryCall("gravatars", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Gravity__gravatarsResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString()
      )
    );
  }
}

export class UpdateGravatarImageCall extends EthereumCall {
  get inputs(): UpdateGravatarImageCall__Inputs {
    return new UpdateGravatarImageCall__Inputs(this);
  }

  get outputs(): UpdateGravatarImageCall__Outputs {
    return new UpdateGravatarImageCall__Outputs(this);
  }
}

export class UpdateGravatarImageCall__Inputs {
  _call: UpdateGravatarImageCall;

  constructor(call: UpdateGravatarImageCall) {
    this._call = call;
  }

  get _imageUrl(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateGravatarImageCall__Outputs {
  _call: UpdateGravatarImageCall;

  constructor(call: UpdateGravatarImageCall) {
    this._call = call;
  }
}

export class SetMythicalGravatarCall extends EthereumCall {
  get inputs(): SetMythicalGravatarCall__Inputs {
    return new SetMythicalGravatarCall__Inputs(this);
  }

  get outputs(): SetMythicalGravatarCall__Outputs {
    return new SetMythicalGravatarCall__Outputs(this);
  }
}

export class SetMythicalGravatarCall__Inputs {
  _call: SetMythicalGravatarCall;

  constructor(call: SetMythicalGravatarCall) {
    this._call = call;
  }
}

export class SetMythicalGravatarCall__Outputs {
  _call: SetMythicalGravatarCall;

  constructor(call: SetMythicalGravatarCall) {
    this._call = call;
  }
}

export class UpdateGravatarNameCall extends EthereumCall {
  get inputs(): UpdateGravatarNameCall__Inputs {
    return new UpdateGravatarNameCall__Inputs(this);
  }

  get outputs(): UpdateGravatarNameCall__Outputs {
    return new UpdateGravatarNameCall__Outputs(this);
  }
}

export class UpdateGravatarNameCall__Inputs {
  _call: UpdateGravatarNameCall;

  constructor(call: UpdateGravatarNameCall) {
    this._call = call;
  }

  get _displayName(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateGravatarNameCall__Outputs {
  _call: UpdateGravatarNameCall;

  constructor(call: UpdateGravatarNameCall) {
    this._call = call;
  }
}

export class CreateGravatarCall extends EthereumCall {
  get inputs(): CreateGravatarCall__Inputs {
    return new CreateGravatarCall__Inputs(this);
  }

  get outputs(): CreateGravatarCall__Outputs {
    return new CreateGravatarCall__Outputs(this);
  }
}

export class CreateGravatarCall__Inputs {
  _call: CreateGravatarCall;

  constructor(call: CreateGravatarCall) {
    this._call = call;
  }

  get _displayName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _imageUrl(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateGravatarCall__Outputs {
  _call: CreateGravatarCall;

  constructor(call: CreateGravatarCall) {
    this._call = call;
  }
}
