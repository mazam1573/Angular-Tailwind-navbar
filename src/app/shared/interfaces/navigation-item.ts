export interface NavigationItem {
  label: string; // The label or display text of the navigation item
  route: string; // The route or URL associated with the navigation item
  icon?: any; // An optional icon class or URL for the navigation item
  isActive?: boolean; // An optional flag to indicate if the navigation item is currently active
  children?: NavigationItem[],
  showChildren?: boolean
}
