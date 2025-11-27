//Changes label text
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class CheckBoxLabel extends JFrame implements ActionListener
{
    JCheckBox cb;
    JLabel l;

    CheckBoxLabel()
    {
        cb = new JCheckBox("Show Message");
        l = new JLabel("");

        cb.setBounds(50, 50, 150, 30);
        l.setBounds(50, 100, 200, 30);

        add(cb);
        add(l);

        cb.addActionListener(this);

        setLayout(null);
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e)
    {
        if (cb.isSelected())
            l.setText("Checkbox is Checked!");
        else
            l.setText("");
    }

    public static void main(String[] args)
    {
       CheckBoxLabel c= new CheckBoxLabel(); 
       c.setVisible(true);
    }
}
