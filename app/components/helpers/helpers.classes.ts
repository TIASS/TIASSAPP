export class RadioOption {
  text: string;
  value: string;
  selected: boolean = false;

  constructor(value: string, text: string, selected?: boolean) {
    this.text = text;
    this.value = value;
    this.selected = selected;
  }
}

export class RadioOptionList {
  items: Array<RadioOption>;
  selectedValue: string;
  constructor(items: Array<RadioOption>) {
    this.items = items;
  }
  
  changeCheckedRadio(item: RadioOption): void {
    item.selected = !item.selected;
    if (!item.selected)
      return;

    // uncheck all other options
    this.items.forEach(option => {
      if (option.value !== item.value)
        option.selected = false;
      else
        this.selectedValue = option.value;
    });
  }
}