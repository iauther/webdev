IMG="web.bin"
WEBDIR=".."
TMPDIR="./tmp"
IMGDIR="/tmp/_img_"
SINGLE="single.js"
IMGSIZE=2097152
CPDIR="~/Desktop"

LIB="laya"



mangle_js() {
    fs=""
    js1=$WEBDIR/js/lib/$LIB
    js2=$WEBDIR/js
 
    for i in $js1/*; do
        fs=$fs" $i"
    done
    
    for i in $js2/*; do
        if [ -f $i ]; then
            fs=$fs" $i"
        fi
    done
    
    echo "mangle now ..."
    uglifyjs -m -c -o $WEBDIR/$SINGLE $fs
    echo "mangle finished ..."
}

copy_to_tmp() {
    
    rm -rf  $TMPDIR
    mkdir -p $TMPDIR
    
    cp $WEBDIR/* $TMPDIR
    cp -r $WEBDIR/res $TMPDIR/
}


#make img file
make_img1() {
    rm $IMG
    ./fat -c $TMPDIR -s $IMGSIZE $IMG
}


#copy web files to img
copy_to_img() {
    rm -rf $IMGDIR/*
    mkdir -p $IMGDIR/js/lib
    
    cp -ruf  $TMPDIR/*     $IMGDIR/
}
make_img2() {
    
    if [ ! -f $IMG ];then
        echo "create $IMG"
        dd if=/dev/zero of=$IMG bs=1M count=2
        mkfs.vfat -F 32 -n "web" $IMG
    fi
    
    if [ -f $IMG ];then
        mkdir -p $IMGDIR
        mount -t vfat $IMG $IMGDIR
        if [ $? -eq 0 ];then
        copy_to_img
        umount $tmp
        else
        echo "mount $img failed"
        fi
    fi
}


#process flow ...
mangle_js
copy_to_tmp
make_img1
#update_img