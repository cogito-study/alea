workflow "build and test" {
  on = "push"
  resolves = ["install", "build", "lint"]
}

workflow "publish on release" {
  on = "release"
  resolves = ["publish"]
}

action "install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "build" {
  needs = "install"
  uses = "nuxt/actions-yarn@master"
  args = "run build-storybook"
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
