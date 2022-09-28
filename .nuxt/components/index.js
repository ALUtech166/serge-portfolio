export { default as BackToTop } from '../..\\components\\BackToTop.vue'
export { default as HireMeModal } from '../..\\components\\HireMeModal.vue'
export { default as AboutClients } from '../..\\components\\about\\AboutClients.vue'
export { default as AboutClientSingle } from '../..\\components\\about\\AboutClientSingle.vue'
export { default as AboutCounter } from '../..\\components\\about\\AboutCounter.vue'
export { default as AboutMe } from '../..\\components\\about\\AboutMe.vue'
export { default as ContactDetails } from '../..\\components\\contact\\ContactDetails.vue'
export { default as ContactForm } from '../..\\components\\contact\\ContactForm.vue'
export { default as ReusableButton } from '../..\\components\\reusable\\Button.vue'
export { default as ProjectsProjectRelatedProjects } from '../..\\components\\projects\\ProjectRelatedProjects.vue'
export { default as ProjectsFilter } from '../..\\components\\projects\\ProjectsFilter.vue'
export { default as ProjectsGrid } from '../..\\components\\projects\\ProjectsGrid.vue'
export { default as SharedAppBanner } from '../..\\components\\shared\\AppBanner.vue'
export { default as SharedAppFooter } from '../..\\components\\shared\\AppFooter.vue'
export { default as SharedAppHeader } from '../..\\components\\shared\\AppHeader.vue'
export { default as SharedAppNavigation } from '../..\\components\\shared\\AppNavigation.vue'
export { default as SharedFooterCopyright } from '../..\\components\\shared\\FooterCopyright.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
