import { ViewModel } from './home-view-model'

export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new ViewModel()
}
