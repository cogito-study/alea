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
  uses = "stefanoeb/eslint-action@master"
  args = ". --ext .ts,.tsx"
}

action "publish" {
  uses = "nuxt/actions-yarn@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
