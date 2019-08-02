workflow "publish on release" {
  on = "release"
  resolves = ["publish"]
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["c6d217dc-bd94-4d72-a447-84f4394fd815"]
}