package com.example.rathin.evenodd.evenodd;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button b = findViewById(R.id.button);
        final EditText e = findViewById(R.id.editText);
        final TextView t = findViewById(R.id.textView);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    int n = Integer.parseInt(e.getText().toString());
                    if(n%2 == 0)
                        t.setText("Even");
                    else
                        t.setText("Odd");
                } catch (NumberFormatException e) {
                    Toast.makeText(MainActivity.this, "Enter Valid Number", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }
}
