from PIL import Image
import pillow_avif
import os


def get_immediate_subdirectories(a_dir):
  return [name for name in os.listdir(a_dir) if os.path.isdir(os.path.join(a_dir, name))]

serverPath = '/img/portfolio/'
root = '/Users/andreiaugustin/Repos/selinafinke/public/img/portfolio/'
files = []


dirs = get_immediate_subdirectories(root)


# for folder in dirs:
#   for file in os.listdir(root+folder):
#     if 'jpg' in file:

#         JPGimg = Image.open(root+folder+'/'+file)
#         file=file.replace(".jpg","")
#         JPGimg.save(root+folder+'/'+file + '.AVIF','AVIF')




# for file in os.listdir(root):
#   if 'jpg' in file:

#         JPGimg = Image.open(root+'/'+file)
#         file=file.replace(".jpg","")
#         JPGimg.save(root+'/'+file + '.AVIF','AVIF')
