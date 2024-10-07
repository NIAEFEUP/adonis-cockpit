import vine from '@vinejs/vine'
import { Field } from './field.js'

export default class Boolean extends Field {
  protected $trueValue: any = true
  protected $falseValue: any = false

  constructor(name: string) {
    super(name)
    this.validator = vine.boolean()
  }

  indexComponent(): string {
    return 'Admin$Boolean$Index'
  }

  formComponent(): string {
    return 'Admin$Boolean$Form'
  }

  /**
   * Defines the emitted values when the boolean is true or false.
   */
  values(trueValue: any, falseValue: any): this {
    this.$trueValue = trueValue
    this.$falseValue = falseValue
    return this
  }

  async $validate(value: any) {
    const validator = vine.compile(vine.enum([this.$trueValue, this.$falseValue]))
    return validator.validate(value)
  }

  static make(name: string): Boolean {
    return new Boolean(name)
  }

  toJSON() {
    return {
      ...super.toJSON(),
      trueValue: this.$trueValue,
      falseValue: this.$falseValue,
    }
  }
}
