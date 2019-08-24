workflow "build and test" {
  on = "push"
  resolves = ["build", "lint"]
}

workflow "publish on release" {
  on = "release"
  resolves = ["publish"]
}

action "build" {
  uses = "nuxt/actions-yarn@master"
  args = "build-storybook"
}

action "lint" {
  uses = "nuxt/actions-yarn@master"
  args = "lint"
}

action "publish" {
  uses = "nuxt/actions-yarn@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
