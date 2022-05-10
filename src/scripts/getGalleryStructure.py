
import os

def get_immediate_subdirectories(a_dir):
  return [name for name in os.listdir(a_dir) if os.path.isdir(os.path.join(a_dir, name))]

serverPath = '/img/portfolio/'
root = '/Users/andreiaugustin/Repos/selinafinke/public/img/portfolio/'
files = []


dirs = get_immediate_subdirectories(root)

print('const gallery = {')
for folder in dirs:
  print('  {}: ['.format(folder))
  for file in os.listdir(root+folder):
    if 'jpg' in file:
      files.append(file)
  files.sort()
  landscapeCounter = 1
  portraitCounter = 1
  for image in files:
    if landscapeCounter == 1 and portraitCounter == 1:
      print('    [')
    if 'l' in image:
      print('      {{ name: \'{}\', filepath: \'{}\' }},'.format(image, serverPath+folder+'/'+image))
      landscapeCounter += 1
    elif 'p' in image:
      print('      {{ name: \'{}\', filepath: \'{}\' }},'.format(image, serverPath+folder+'/'+image))
      portraitCounter += 1


    if portraitCounter == 4 or landscapeCounter == 3:
      portraitCounter = 1
      landscapeCounter = 1

    if landscapeCounter == 1 and portraitCounter == 1:
      print('    ],')

  print('  ],\n')
  files.clear()
print('}\n')

print('export default gallery')