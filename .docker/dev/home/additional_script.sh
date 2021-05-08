
### Don't edit ~/.bashrc! Write your commands to ~/.bashrc.d/xxx.sh.
if [ -d ~/.bashrc.d ]; then
  for i in ~/.bashrc.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi
